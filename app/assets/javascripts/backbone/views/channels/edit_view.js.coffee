Geochat.Views.Channels ||= {}

class Geochat.Views.Channels.EditView extends Backbone.View
  template : JST["backbone/templates/channels/edit"]

  events :
    "submit #edit-channel" : "update"

  update : (e)->
    e.preventDefault()
    e.stopPropagation()

    @model.save null,
      success : (channel)=>
        @model = channel
        window.location.hash = "/#{@model.id}"

  render : ->
    @$el.html @template @model.toJSON()

    @$("form").backboneLink(@model)

    return @
