Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ShowView extends Backbone.View
  template: JST["backbone/templates/channels/show"]

  render: ->
    @$el.html(@template(@model.toJSON() ))
    if navigator.geolocation
      setTimeout(geo.init,0)
      chat.channelName = "#{@model.get('id')}"
      setTimeout(chat.init,0)
    else
      alert('Your browser is too old!')

    return this
