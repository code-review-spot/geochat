Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.ChannelNavView extends Backbone.View
  template: JST["backbone/templates/channels/channel_nav"]

  events:
    "click .map"      : "showMap"
    "click .messages" : "showMessages"
    "click .members"  : "showMembers"

  tagName: "ul"
  className: "nav channel"

  render: ->
    @$map = $('#map')
    @$messages = $('#messages')
    @$members = $('#members')
    @$nav = $('.nav-collapse')

    @$nav.collapse
      toggle: false
    
    @$el.html @template @model.toJSON()
    return @

  showMap: (event)->
    window.location.hash = "/channels/#{@model.get('name')}"

    @$members.hide()
    @$messages.hide()

    @$el.find('li').removeClass('active')
    @$el.find('.map').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

  showMessages: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/messages"

    @$members.hide()
    @$messages.show()

    @$el.find('li').removeClass('active')
    @$el.find('.messages').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

  showMembers: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/members"

    @$messages.hide()
    @$members.show()

    @$el.find('li').removeClass('active')
    @$el.find('.members').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

