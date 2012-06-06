# Invalid request view.
#
class Geochat.Views.MissingView extends Backbone.View
  # template
  template: JST["backbone/templates/missing"]

  # attributes
  tagName: "div"
  className: "hero-unit"

  # Renders the view.
  #
  render: ->
    $(@el).html @template
      request: @options.request

    return @
