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
      gc.log("Count", members.count)

      # initialize map
      setTimeout(geo.init,0)

    # when member leaves
    channel.bind 'pusher:member_removed', (member)->
      chat.removeMember(member)
      gc.log("Count", channel.members.count)

    # when member joins
    channel.bind 'pusher:member_added', (member)->
      chat.addMember(member)
      gc.log("Count", channel.members.count)

    # receive message
    channel.bind 'message', (message)->
      chat.addMessage(message)

    # send message
    $('#sender textarea')
      .on 'keyup', (event)->
        if event.keyCode is 13
          event.preventDefault()
          do chat.sendMessage
      .focus()

    # receive location
    channel.bind 'location', (data)->
      gc.log('position:received')
      geo.setPosition(data)

  addMember: (member)->
    $members = $('#members').find('.content')
    gc.log('add:member', member, member.id)

    # would be best to convert members and messages to models, collections and views
    html = """
      <a href="http://twitter.com/#{member.info.nickname}" target="_blank">
        <img src="#{member.info.image}">
        <span class="name">#{member.info.nickname}</span>
      </a>
    """

    $("<li id=\"presence-#{member.id}\" />")
      .html(html)
      .appendTo($members)

  removeMember: (member)->
    $("#presence-#{member.id}").remove()
    geo.markers[member.info.nickname].setMap(null)
    delete geo.markers[member.info.nickname]

  addMessage: (message)->
    $messages = $('#messages').find('.content')

    if $messages.hasClass('empty')
      $messages
        .empty()
        .removeClass('empty')

    html  = "<span class=\"name\">#{message.nickname}:</span>"
    text = " #{message.text}"

    $('<li/>')
      .text(text)
      .prepend(html)
      .prependTo($messages)
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

  sendPosition: (position)->
    $.post '/locations',
      channel: chat.channelName
      position: position

  disconnect: ->
    if chat.pusher? then chat.pusher.disconnect()
    chat.channel = null
    chat.channelName = null
    do geo.reset
