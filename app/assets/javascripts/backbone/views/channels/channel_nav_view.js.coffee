# Channel navigation view.
#
class Geochat.Views.Channels.ChannelNavView extends Backbone.View
  # template
  template: JST["backbone/templates/channels/channel_nav"]

  # attributes
  tagName: "ul"
  className: "nav channel"

  # event mappings
  events:
    "click .map"  : "showMap"
    "click .chat" : "showChat"
    "click .info" : "showInfo"

  # Renders the view.
  #
  render: ->
    @$map  = $('#map')
    @$chat = $('#chat')
    @$info = $('#info')
    @$nav  = $('.nav-collapse')

    @$nav.collapse
      toggle: false
    
    @$el.html @template @model.toJSON()

    return @

  # Shows the map. Hides chat and info panes.
  #
  # @param event [Object] the DOM event
  #
  showMap: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/map"

    @$info.hide()
    @$chat.hide()

    @$el.find('li').removeClass('active')
    @$el.find('.map').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

  # Shows the chat pane. Hides the info pane.
  #
  # @param event [Object] the DOM event
  #
  showChat: (event)->
    @$el.find('.chat').removeClass('notify').find('.count').remove()
    window.location.hash = "/channels/#{@model.get('name')}"

    @$info.hide()
    @$chat.show()

    @$el.find('li').removeClass('active')
    @$el.find('.chat').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')
    $('#sender textarea').focus()

  # Shows the info pane. Hides the chat pane.
  #
  # @param event [Object] the DOM event
  #
  showInfo: (event)->
    window.location.hash = "/channels/#{@model.get('name')}/info"

    @$chat.hide()
    @$info.show()

    @$el.find('li').removeClass('active')
    @$el.find('.info').addClass('active')

    # collapse doesn't hide on click in mobile layout
    @$nav.collapse('hide')

