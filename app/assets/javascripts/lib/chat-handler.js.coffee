window.chat =
  pusher: null
  channel: null
  channelName: null

  connect: ->
    chat.pusher = new Pusher(gc.PUSHER_KEY)
    chat.channel = channel = chat.pusher.subscribe("presence-#{chat.channelName}")

    # initial presence check
    channel.bind 'pusher:subscription_succeeded', (members)->
      $('#presence').empty()
      members.each(chat.addMember)

      # initialize map
      geo.init()

    # when member leaves
    channel.bind 'pusher:member_removed', (member)-> chat.removeMember(member)

    # when member joins
    channel.bind 'pusher:member_added', (member)-> chat.addMember(member)

    # receive message
    channel.bind 'message', (message)-> chat.addMessage(message)

    # send message
    $('#sender textarea')
      .on 'keyup', (event)->
        if event.keyCode is 13
          event.preventDefault()
          chat.sendMessage()

    # receive location
    channel.bind 'location', (data)->
      geo.setPosition(data)

    # respond to location request
    channel.bind 'location_request', (data)->
      chat.sendPosition(geo.position)

  addMember: (member)->
    $info = $('#info').find('.content')

    # would be best to convert members and messages to models, collections and views
    html = """
      <img src="#{member.info.image}">
      <span class="name">#{member.info.nickname}</span>
    """

    $("<li id=\"presence-#{member.id}\" />")
      .html(html)
      .appendTo($info)
      .click ->
        geo.map.panTo(geo.markers[member.info.nickname].position)

  removeMember: (member)->
    $("#presence-#{member.id}").remove()
    geo.markers[member.info.nickname].setMap(null)
    delete geo.markers[member.info.nickname]

  addMessage: (message)->
    $chat = $('#chat').find('.content')

    if $chat.hasClass('empty')
      $chat
        .empty()
        .removeClass('empty')

    d = new Date()
    hours = d.getHours()
    minutes = d.getMinutes()

    switch true
      when hours > 12
        hours -= 12
        m = 'pm'
      when hours is 0
        hours = 12
        m = 'am'
      when hours is 12 then m = 'pm'
      else m = 'am'

    t = "#{hours}:#{minutes} #{m}"
    dt = d.toLocaleString()

    html = "<p><span class=\"name\">#{message.nickname}:</span>"
    html += "<span class=\"text\"></span></p>"
    html += "<time datetime=\"#{dt}\">#{t}</time>"
    text = " #{message.text}"

    $('<li class="message"/>')
      .append(html)
        .find('.text').text(text).end()
      .prependTo($chat)
      .hide()
      .fadeIn('fast')
    $nav = $('.navbar .nav.channel .chat')
    if $nav.hasClass('active') then return
    $nav.addClass('notify')
    $count = $nav.find('a .count')
    if $count.length > 0
      str = $.trim($count.text())
      str = str.substring(1, str.length-1)
      c = parseInt str
      gc.log(c, str)
      c++ #hehe
      $count.text(" (#{c})")
    else
      t = '<span class="count"> (1)</span>'
      $nav.find('a').append(t)

  sendMessage: ->
    input = $('#sender textarea')
    text = input.val()

    if !text then return false
    input.val('')

    $.post '/messages',
      channel: chat.channelName
      text: text
    , ->
      input.focus()

  getAllPositions: ->
    $.get "/locations/#{chat.channelName}"

  sendPosition: (position)->
    $.post '/locations',
      channel: chat.channelName
      position: position

  disconnect: ->
    if chat.pusher?
      chat.pusher.disconnect()
      chat.channel = null
      chat.channelName = null
      geo.reset()
