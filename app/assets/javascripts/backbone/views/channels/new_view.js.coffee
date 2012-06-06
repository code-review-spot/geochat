# New channel view.
#
class Geochat.Views.Channels.NewView extends Backbone.View
  # template
  template: JST["backbone/templates/channels/new"]

  # attributes
  className: 'row-fluid'

  # event mappings
  events:
    "submit #new-channel"      : "save"
    # "keyup #new-channel input" : "filterInput"

  # Constructs the view using an empty model.
  #
  # @param options [Object] construction options
  #
  constructor: (options)->
    super(options)
    @model = new @collection.model()

    @model.bind "change:errors", => @render()

  # Renders the view.
  #
  render: ->
    @$el.html @template @model.toJSON()

    @$("form").backboneLink(@model)

    return @

  # Saves the channel.
  #
  # @param e [Object] DOM event.
  #
  save: (event)->
    event.preventDefault()
    event.stopPropagation()

    # cancel if input value is null
    if !@$('input').val() then return false

    @model.unset("errors")

    @collection.create @model.toJSON(),
      # on successful save, instantiate model and switch to show view
      success: (channel)=>
        @model = channel
        window.location.hash = "/channels/#{@model.get('name')}"

      error: (channel, jqXHR)=>
        # attach errors to model if save fails
        @model.set({errors: $.parseJSON(jqXHR.responseText)})

  # Filters invalid characters from input during typing.
  #
  # @param event [Object] the DOM event
  #
  filterInput: (event)->
    patt = /^[A-Za-z0-9_]$/gi
    $input = @$el.find('input')
    text = String $input.val()
    gc.log(patt.test)
    # text = text.toLowerCase()
    text = text.replace(/[^a-zA-Z0-9s\.]+/gi,"")
    $input.val(text)
