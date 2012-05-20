window.chat =
  pusher: null
  channel: null
  channelName: null

  connect: ->
    chat.pusher = new Pusher(gc.PUSHER_KEY)
    chat.channel = chat.pusher.subscribe("presence-#{chat.channelName}")

    # initial presence check
    chat.channel.bind 'pusher:subscription_succeeded', (members)->
      $('#presence').empty()
      members.each(chat.addMember)
      gc.log("Count", members.count)

    # when member leaves
    chat.channel.bind 'pusher:member_removed', (member)->
      $('#presence-' + member.id).remove()
      gc.log("Count", channel.members.count)

    # when member joins
    chat.channel.bind 'pusher:member_added', (member)->
      chat.addMember(member)
      gc.log("Count", channel.members.count)

    # receive message
    chat.channel.bind 'message', (message)->
      chat.addMessage(message)

    # send message
    $('#send').click chat.sendMessage
    $('#sender input')
      .on 'keyup', (event)->
        if event.keyCode is 13 then chat.sendMessage(event)
      .focus()

  addMember: (member)->
    $members = $('#members').find('.content')
    gc.log('add:member', member)

    # maybe make a view
    member = """
      <a href="http://twitter.com/#{member.info.nickname}" target="_blank">
        <img src="#{member.info.image}">
        <span class="name">#{member.info.nickname}</span>
      </a>
    """

    $('<li/>')
      .html(member)
      .appendTo($members)

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
      .appendTo($messages).hide().fadeIn('fast')

  sendMessage: (event)->
    event.preventDefault()
    input = $('#sender input')
    text = input.val()

    if !text then return false
    input.val('')

    $.post '/messages',
      text: text
      channel: chat.channelName
    , ->
      input.focus()

  disconnect: ->
    if chat.pusher? then chat.pusher.disconnect()
    chat.channel = null
    chat.channelName = null
