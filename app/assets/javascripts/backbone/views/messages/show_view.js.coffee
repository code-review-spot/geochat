Geochat.Views.Messages ||= {}

class Geochat.Views.Messages.ShowView extends Backbone.View
  template: JST["backbone/templates/messages/show"]

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this
