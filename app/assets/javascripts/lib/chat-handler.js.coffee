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
      gc.log('location:received', data)
      geo.setPosition(data)

    # respond to location request
    channel.bind 'location_request', (data)->
      gc.log('location:requested')
      chat.sendPosition(geo.position)

  addMember: (member)->
    $info = $('#info').find('.content')

    # would be best to convert members and messages to models, collections and views
    html = """
      <a href="http://twitter.com/#{member.info.nickname}" target="_blank">
        <img src="#{member.info.image}">
        <span class="name">#{member.info.nickname}</span>
      </a>
    """

    $("<li id=\"presence-#{member.id}\" />")
      .html(html)
      .appendTo($info)

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

    html  = "<span class=\"name\">#{message.nickname}:</span>"
    text = " #{message.text}"

    $('<li/>')
      .text(text)
      .prepend(html)
      .prependTo($chat)
      .hide()
      .fadeIn('fast')

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
    if chat.pusher? then chat.pusher.disconnect()
    chat.channel = null
    chat.channelName = null
    geo.reset()
