class Geochat.Models.Message extends Backbone.Model
  paramRoot: 'message'

  defaults:
    author: null
    content: null

class Geochat.Collections.MessagesCollection extends Backbone.Collection
  model: Geochat.Models.Message
  url: '/messages'
