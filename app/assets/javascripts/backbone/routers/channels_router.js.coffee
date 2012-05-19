class Geochat.Routers.ChannelsRouter extends Backbone.Router
  # constructor: ->
  #   super()
  #   hash = window.location.hash.replace '#/', ''
  #   if hash
  #     for k, v of @routes
  #       gc.log(k,v,hash)
  #       if k is hash then return # doesn't work with :id type routes yet
  #     @show404Error()

  initialize: (options)->
    do gc.dfd.init

    @channels = new Geochat.Collections.ChannelsCollection()

    $.get '/channels.json', (data)=>
      @channels.reset data
      do gc.dfd.resolve

  routes:
    "new"                    : "newChannel"
    "index"                  : "index"
    "channels/:name"         : "show"
    "channels/:name/:action" : "show"
    ".*"                     : "index"

  newChannel: ->
    gc.dfd.done =>
      @view = new Geochat.Views.Channels.NewView
        collection: @channels

      $("#main").html(@view.render().el)

  index: ->
    gc.dfd.done =>
      if window.trackPosition? then clearInterval(window.trackPosition)
      if !!$('.navbar .channel-name').text() then $('.navbar .channel-name').text('')
      if @view and @view.nav then @view.nav.$el.remove() && delete @view.nav

      @view = new Geochat.Views.Channels.IndexView
        channels: @channels

      $("#main").html(@view.render().el)

  show: (name, action)->
    gc.dfd.done =>
      channel = @channels.where(name: name)[0]

      renderView = =>
        gc.log(!@view)
        if !@view
          $navbar = $('.navbar')
          $name = $navbar.find('.channel-name')
          $name.text("#{name}")
          $navbar.find('.channel').remove()

          @view = new Geochat.Views.Channels.ShowView
            model: channel

          $("#main").html(@view.render().el)
          $name.after(@view.nav.render().el)

        switch action
          when "messages" then do @view.nav.showMessages
          when "members" then do @view.nav.showMembers
          else do @view.nav.showMap

      if !!channel then do renderView
      else
        @channels.fetch
          success: =>
            channel = @channels.where(name: name)[0]

            if !channel
              gc.log("channel doesn't exist")
              return false

            do renderView

  show404Error: ->
    gc.dfd.done =>
      gc.log("that doesn't exist!")

