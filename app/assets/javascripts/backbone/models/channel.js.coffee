# Channel model.
#
class Geochat.Models.Channel extends Backbone.Model
  paramRoot: 'channel'

  defaults:
    name: null

  # not yet implemented
  validation:
    name:
      required: true

# Channels collection.
#
class Geochat.Collections.ChannelsCollection extends Backbone.Collection
  model: Geochat.Models.Channel
  url: '/channels'
