class Geochat.Routers.ChannelsRouter extends Backbone.Router
  initialize: (options) ->
    do window.deferred.init
    @channels = new Geochat.Collections.ChannelsCollection()
    $.get '/channels.json', (data)=>
      @channels.reset data
      console.log('loaded')
      do window.deferred.resolve

  routes:
    "new"      : "newChannel"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newChannel: ->
    window.dfd.done =>
      @view = new Geochat.Views.Channels.NewView(collection: @channels)
      $("#main").html(@view.render().el)

  index: ->
    window.dfd.done =>
      if window.trackPosition
        clearInterval(window.trackPosition)

      $('.channel-name').text('')
      @view = new Geochat.Views.Channels.IndexView(channels: @channels)
      $("#main").html(@view.render().el)

  show: (id) ->
    window.dfd.done =>
      channel = @channels.get(id)
      console.log(channel)
      $('.channel-name').text('channel: ' + channel.get('name'))
      @view = new Geochat.Views.Channels.ShowView(model: channel)
      $("#main").html(@view.render().el)

  edit: (id) ->
    window.dfd.done =>
      channel = @channels.get(id)

      @view = new Geochat.Views.Channels.EditView(model: channel)
      $("#main").html(@view.render().el)
