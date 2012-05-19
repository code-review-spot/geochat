Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.NewView extends Backbone.View
  template: JST["backbone/templates/channels/new"]

  className: 'row-fluid'

  events:
    "submit #new-channel"      : "save"
    # "keyup #new-channel input" : "filterInput"

  constructor: (options)->
    super(options)
    @model = new @collection.model()

    @model.bind "change:errors", => @render()

  save: (e)->
    e.preventDefault()
    e.stopPropagation()

    if !@$('input').val() then return false

    @model.unset("errors")

    @collection.create @model.toJSON(),
      success: (channel)=>
        @model = channel
        window.location.hash = "/channels/#{@model.get('name')}"

      error: (channel, jqXHR)=>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})

  filterInput: (e)->
    patt = /^[A-Za-z0-9_]$/gi
    $input = @$el.find('input')
    text = String $input.val()
    gc.log(patt.test)
    # text = text.toLowerCase()
    text = text.replace(/[^a-zA-Z0-9s\.]+/gi,"")
    $input.val(text)

  render: ->
    @$el.html @template @model.toJSON()

    @$("form").backboneLink(@model)

    return @
