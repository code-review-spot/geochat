Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ChannelView extends Backbone.View
  template: JST["backbone/templates/channels/channel"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: ->
    @model.destroy()
    @remove()

    return false

  render: ->
    $(@el).html @template @model.toJSON()

    return @
