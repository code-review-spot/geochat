Geochat.Views.Channels ||= {}

class Geochat.Views.MissingView extends Backbone.View
  template: JST["backbone/templates/missing"]
  tagName: "div"
  className: "hero-unit"

  render: ->
    $(@el).html @template
      request: @options.request

    return @
