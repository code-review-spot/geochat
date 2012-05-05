Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.IndexView extends Backbone.View
  template: JST["backbone/templates/channels/index"]

  initialize: () ->
    @options.channels.bind('reset', @addAll)

  addAll: () =>
    @options.channels.each(@addOne)

  addOne: (channel) =>
    view = new Geochat.Views.Channels.ChannelView({model : channel})
    @$("#channels").append(view.render().el)

  render: =>
    chat.clear()
    $(@el).html(@template(channels: @options.channels.toJSON() ))
    @addAll()

    return this
