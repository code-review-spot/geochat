window.chat =
  pusher: null
  channel: null
  channelName: null

  init: ()->
    chat.pusher = new Pusher(gc.PUSHER_KEY)
    chat.channel = chat.pusher.subscribe("channel_#{chat.channelName}")
    chat.channel.bind 'message', (data)->
      gc.log('message',data)
      msg = $('<p/>').text("#{data.author}: #{data.body}")
      $('#messages').append(msg)
    $('#send').click chat.send

  send: (event)->
    do event.preventDefault
    body = $('#sender input').val()
    $.post '/messages',
      author: gc.USERNAME
      body: body
      channel: chat.channelName
    , ()->
      $('#sender input').val('')

  clear: ()->
    if chat.pusher? then chat.pusher.disconnect()
    chat.channel = null
    chat.channelName = null
