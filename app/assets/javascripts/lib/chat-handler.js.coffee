window.chat =
  pusher: null
  channel: null
  channelName: null

  init: ()->
    chat.pusher = new Pusher(gc.PUSHER_KEY)
    chat.channel = chat.pusher.subscribe("channel_#{chat.channelName}")

    chat.channel.bind 'message', (data)->
      msg = $('<span/>').text("#{data.author}: #{data.body}")
      $('<div/>')
        .append(msg)
        .appendTo('#messages')
        .hide()
        .fadeIn('fast')

    $('#send').click chat.send
    $('#sender input')
      .on 'keyup', (event)->
        if event.keyCode is 13 then chat.send(event)
      .focus()

  send: (event)->
    do event.preventDefault
    input = $('#sender input')
    body = input.val()

    if !body then return false
    input.val('')

    $.post '/messages',
      author: gc.USERNAME
      body: body
      channel: chat.channelName
    , ()->
      input.focus()

  clear: ()->
    if chat.pusher? then chat.pusher.disconnect()
    chat.channel = null
    chat.channelName = null
