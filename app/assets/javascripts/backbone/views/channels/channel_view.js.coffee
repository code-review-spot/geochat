# Channel row view.
#
class Geochat.Views.Channels.ChannelView extends Backbone.View
  # template
  template: JST["backbone/templates/channels/channel"]

  # attributes
  tagName: "li"
  className: "channel"

  # event mappings
  events:
    "click .destroy" : "destroy"

  # Renders the view.
  #
  render: ->
    @$el.html @template @model.toJSON()
    return @

  # Permanently deletes the channel.
  #
  destroy: ->
    @model.destroy()
    @remove()

    return false
