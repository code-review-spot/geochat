class Geochat.Routers.ChannelsRouter extends Backbone.Router
  initialize: (options) ->
    do gc.dfd.init
    @channels = new Geochat.Collections.ChannelsCollection()
    $.get '/channels.json', (data)=>
      @channels.reset data
      gc.log('Channels Router initialized')
      do gc.dfd.resolve

  routes:
    "new"      : "newChannel"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"       : "index"

  newChannel: ->
    gc.dfd.done =>
      @view = new Geochat.Views.Channels.NewView(collection: @channels)
      $("#main").html(@view.render().el)

  index: ->
    gc.dfd.done =>
      if window.trackPosition
        clearInterval(window.trackPosition)

      $('.channel-name').text('')
      @view = new Geochat.Views.Channels.IndexView(channels: @channels)
      $("#main").html(@view.render().el)

  show: (id) ->
    gc.dfd.done =>
      channel = @channels.get(id)
      gc.log("channel #{id}", channel)
      $('.channel-name').text('channel: ' + channel.get('name'))
      @view = new Geochat.Views.Channels.ShowView(model: channel)
      $("#main").html(@view.render().el)

  edit: (id) ->
    gc.dfd.done =>
      channel = @channels.get(id)

      @view = new Geochat.Views.Channels.EditView(model: channel)
      $("#main").html(@view.render().el)
