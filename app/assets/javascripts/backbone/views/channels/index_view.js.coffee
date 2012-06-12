# Application index view.
#
class Geochat.Views.Channels.IndexView extends Backbone.View
  # template
  template: JST["backbone/templates/channels/index"]

  # attributes
  className: "row-fluid"

  # Initializes the view.
  #
  initialize: ->
    @options.channels.bind('reset', @addAll)

  # Renders the view.
  #
  render: =>
    # disconnect from socket if there is an active connection.
    chat.disconnect()

    $(@el).html @template
      channels: @options.channels.toJSON()

    @$channels = @$("#channels")

    @addAll()

    return @

  # Adds a channel to the index.
  #
  # @param channel [Object] the model of the channel to add
  #
  addOne: (channel)=>
    view = new Geochat.Views.Channels.ChannelView
      model: channel

    if @$channels.hasClass('empty') then @$channels.empty().removeClass('empty')

    @$channels.append(view.render().el)

  # Adds all channels to the index.
  addAll: =>
    @options.channels.each(@addOne)
