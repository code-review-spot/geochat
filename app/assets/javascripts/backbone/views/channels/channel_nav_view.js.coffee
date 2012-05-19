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
    
    @$el.html @template @model.toJSON()
    return @

  # these need DRYing
  showMap: (event)->
    if event? then event.preventDefault()

    window.location.hash = "/channels/#{@model.get('name')}"
    @$members.hide()
    @$messages.hide()
    @$map.show()
    @$el.find('li').removeClass('active')
    @$el.find('.map').addClass('active')
  showMessages: (event)->
    if event? then event.preventDefault()

    window.location.hash = "/channels/#{@model.get('name')}/messages"
    @$map.hide()
    @$members.hide()
    @$messages.show()
    @$el.find('li').removeClass('active')
    @$el.find('.messages').addClass('active')
  showMembers: (event)->
    if event? then event.preventDefault()

    window.location.hash = "/channels/#{@model.get('name')}/members"
    @$map.hide()
    @$messages.hide()
    @$members.show()
    @$el.find('li').removeClass('active')
    @$el.find('.members').addClass('active')

