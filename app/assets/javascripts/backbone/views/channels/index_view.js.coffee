Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.IndexView extends Backbone.View
  template: JST["backbone/templates/channels/index"]

  initialize: () ->
    @options.channels.bind('reset', @addAll)

  addAll: () =>
    @options.channels.each(@addOne)

  addOne: (channel) =>
    view = new Geochat.Views.Channels.ChannelView({model : channel})
    @$("tbody").append(view.render().el)

  render: =>
    if gc.pusher? then gc.pusher.disconnect()
    $(@el).html(@template(channels: @options.channels.toJSON() ))
    @addAll()

    return this
