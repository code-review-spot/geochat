#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.Geochat =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}

$ ->
  if $('body').hasClass('welcome') then return false
  window.pusher = new Pusher(gc.PUSHER_KEY)
  window.router = new Geochat.Routers.ChannelsRouter
  do Backbone.history.start
