#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

# Geochat global object literal. Stores all client-side application logic.
window.Geochat =
  Models: {}
  Collections: {}
  Routers: {}
  Views:
    Channels: {}

$ ->
  # prevent router initialization if user is not logged in
  if !gc.USERNAME then return false

  # initialize router
  window.router = new Geochat.Routers.ChannelsRouter
  do Backbone.history.start
