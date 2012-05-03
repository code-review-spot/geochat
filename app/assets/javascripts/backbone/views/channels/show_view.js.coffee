Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ShowView extends Backbone.View
  template: JST["backbone/templates/channels/show"]

  render: ->
    @$el.html(@template(@model.toJSON() ))
    setTimeout(geo.init, 0)

    gc.channel = pusher.subscribe("channel_#{String(@model.get('id'))}")
    gc.channel.bind 'msg', (data)->
      gc.log(data)

    return this
