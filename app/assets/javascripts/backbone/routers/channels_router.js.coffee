class Geochat.Routers.ChannelsRouter extends Backbone.Router
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
    "*req"                   : "missing"

  newChannel: ->
    gc.dfd.done =>
      @view = new Geochat.Views.Channels.NewView
        collection: @channels

      $("#main").html(@view.render().el)

  index: ->
    gc.dfd.done =>
      if window.trackPosition? then clearInterval(window.trackPosition)
      if !!$('.navbar .channel-name').text() then $('.navbar .channel-name').text('Home')
      if @view and @view.nav then @view.nav.$el.remove() && delete @view.nav

      @view = new Geochat.Views.Channels.IndexView
        channels: @channels

      $("#main").html(@view.render().el)

  show: (name, action)->
    gc.dfd.done =>
      channel = @channels.where(name: name)[0]

      renderView = =>
        if !@view or (@view and !@view.nav)
          $navbar = $('.navbar')
          $navbar.find('.channel-name').text("#{name}")
          $navbar.find('.channel').remove()

          @view = new Geochat.Views.Channels.ShowView
            model: channel

          $("#main").html(@view.render().el)
          $navbar.find('.nav-collapse').prepend(@view.nav.render().el)

        switch action
          when "map" then do @view.nav.showMap
          when "info" then do @view.nav.showInfo
          else do @view.nav.showChat

      if !!channel then do renderView
      else
        @channels.fetch
          success: =>
            channel = @channels.where(name: name)[0]

            if !channel
              do @missing
              return false

            do renderView

  missing: (request)->
    gc.dfd.done =>
      @view = new Geochat.Views.MissingView
        request: request

      $("#main").html(@view.render().el)

