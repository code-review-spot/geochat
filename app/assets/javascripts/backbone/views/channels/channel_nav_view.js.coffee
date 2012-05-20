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

    @$members.css('z-index','1')
    @$messages.css('z-index','1')

    @$map.css('z-index','10')

    @$el.find('li').removeClass('active')
    @$el.find('.map').addClass('active')
    @$nav.collapse('hide')

  showMessages: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/messages"

    @$map.css('z-index','1')
    @$members.css('z-index','1')

    @$messages.css('z-index','10')

    @$el.find('li').removeClass('active')
    @$el.find('.messages').addClass('active')
    @$nav.collapse('hide')

  showMembers: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/members"

    @$map.css('z-index','1')
    @$messages.css('z-index','1')

    @$members.css('z-index','10')

    @$el.find('li').removeClass('active')
    @$el.find('.members').addClass('active')
    @$nav.collapse('hide')

