Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ShowView extends Backbone.View
  template: JST["backbone/templates/channels/show"]

  render: ->
    if navigator.geolocation?
      setTimeout(geo.init,0)
      chat.channelName = "#{@model.get('name')}"
      setTimeout(chat.connect,0)
      @$el.html @template @model.toJSON()

      @nav = new Geochat.Views.Channels.ChannelNavView
        model: @model
    else
      alert('Your browser is too old!')

    return @
