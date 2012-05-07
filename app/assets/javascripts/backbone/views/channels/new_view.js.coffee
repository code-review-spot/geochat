Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.NewView extends Backbone.View
  template: JST["backbone/templates/channels/new"]
  className: 'row-fluid'

  events:
    "submit form" : "save"

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

  render: ->
    @$el.html @template @model.toJSON()

    @$("form").backboneLink(@model)

    return @
