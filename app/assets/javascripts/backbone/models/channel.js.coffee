class Geochat.Models.Channel extends Backbone.Model
  paramRoot: 'channel'

  defaults:
    name: null

class Geochat.Collections.ChannelsCollection extends Backbone.Collection
  model: Geochat.Models.Channel
  url: '/channels'
