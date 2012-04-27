class Geochat.Routers.MessagesRouter extends Backbone.Router
  initialize: (options) ->
    @messages = new Geochat.Collections.MessagesCollection()
    $.get '/messages.json', (data)=>
      @messages.reset data

  routes:
    "new"      : "newMessage"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"       : "index"

  newMessage: ->
    @view = new Geochat.Views.Messages.NewView(collection: @messages)
    $("#messages").html(@view.render().el)

  index: ->
    @view = new Geochat.Views.Messages.IndexView(messages: @messages)
    $("#messages").html(@view.render().el)

  show: (id) ->
    message = @messages.get(id)

    @view = new Geochat.Views.Messages.ShowView(model: message)
    $("#messages").html(@view.render().el)

  edit: (id) ->
    message = @messages.get(id)

    @view = new Geochat.Views.Messages.EditView(model: message)
    $("#messages").html(@view.render().el)
