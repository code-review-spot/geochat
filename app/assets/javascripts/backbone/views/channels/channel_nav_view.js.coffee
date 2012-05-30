Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ChannelNavView extends Backbone.View
  template: JST["backbone/templates/channels/channel_nav"]

  events:
    "click .map"  : "showMap"
    "click .chat" : "showChat"
    "click .info" : "showInfo"

  tagName: "ul"
  className: "nav channel"

  render: ->
    @$map  = $('#map')
    @$chat = $('#chat')
    @$info = $('#info')
    @$nav  = $('.nav-collapse')

    @$nav.collapse
      toggle: false
    
    @$el.html @template @model.toJSON()
    return @

  showMap: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/map"

    @$info.hide()
    @$chat.hide()

    @$el.find('li').removeClass('active')
    @$el.find('.map').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

  showChat: (event)->
    window.location.hash = "/channels/#{@model.get('name')}"

    @$info.hide()
    @$chat.show()

    @$el.find('li').removeClass('active')
    @$el.find('.chat').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')
    $('#sender textarea').focus()

  showInfo: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/info"

    @$chat.hide()
    @$info.show()

    @$el.find('li').removeClass('active')
    @$el.find('.info').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

