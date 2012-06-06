# Channel show view.
#
class Geochat.Views.Channels.ShowView extends Backbone.View
  # template
  template: JST["backbone/templates/channels/show"]

  # Renders the view.
  #
  render: ->
    # check for browser's support of navigator geolocation
    if navigator.geolocation?
      chat.channelName = "#{@model.get('name')}"
      @$el.html @template @model.toJSON()

      # setTimeout to call chat.connect after template is finished rendering
      setTimeout(chat.connect,0)

      @nav = new Geochat.Views.Channels.ChannelNavView
        model: @model

    # cancel if navigator geolocation is not supported
    else
      alert('Your browser is too old!')
      return false

    return @
