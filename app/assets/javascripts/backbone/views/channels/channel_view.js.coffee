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
    "click"          : "show"

  # Renders the view.
  #
  render: ->
    @$el.html @template @model.toJSON()
    return @

  # Shows the channel.
  #
  show: ->
    window.location.hash = "/channels/#{@model.get('name')}"

  # Permanently deletes the channel.
  #
  destroy: (event)->
    event.stopPropagation()
    @model.destroy()
    @remove()

    return false
