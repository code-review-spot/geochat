Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ShowView extends Backbone.View
  template: JST["backbone/templates/channels/show"]

  render: ->
    if navigator.geolocation?
      chat.channelName = "#{@model.get('name')}"
      @$el.html @template @model.toJSON()
      setTimeout(chat.connect,0)

      @nav = new Geochat.Views.Channels.ChannelNavView
        model: @model
    else
      alert('Your browser is too old!')

    return @
