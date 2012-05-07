Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ShowView extends Backbone.View
  template: JST["backbone/templates/channels/show"]

  render: ->
    if navigator.geolocation
      setTimeout(geo.init,0)
      chat.channelName = "#{@model.get('name')}"
      setTimeout(chat.init,0)
    else
      alert('Your browser is too old!')

    @$el.html @template @model.toJSON()

    return @
