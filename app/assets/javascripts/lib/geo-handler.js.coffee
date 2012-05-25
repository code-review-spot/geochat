window.geo =
  map: null
  markers: {}
  position: null

  geocoder: new google.maps.Geocoder()
  latLng: new google.maps.LatLng(39.102431, -94.583698)

  init: ->
    geo.setOptions()

    geo.map = new google.maps.Map(document.getElementById('map'), geo.options)

    geo.getUserPosition { init: true }

    # window.trackPosition = setInterval ->
    #   do geo.setUserPosition
    # , 5000

  reset: ->
    geo.map      = null
    geo.markers  = {}
    geo.position = null

  code: (query, cb)->
    geo.geocoder.geocode { 'address': query }, (res, status)->
      if status is google.maps.GeocoderStatus.OK
        location = res[0].geometry.location
        if cb then return cb(location) else return location
      else
        if cb then return cb(false) else return false

  center: (location, zoom)->
    geo.map.setCenter(location)
    geo.map.setZoom(zoom) if zoom

  clear: ->
    if geo.markers? then marker.setMap(null) for marker in geo.markers

  setOptions: ->
    defaults =
      center:             geo.latLng
      mapTypeId:          google.maps.MapTypeId.ROADMAP
      mapTypeControl:     false
      overviewMapControl: false
      panControl:         false
      rotateControl:      false
      scaleControl:       false
      scrollwheel:        true
      streetViewControl:  false
      zoom:               4
      zoomControl:        true
      zoomControlOptions:
        position: google.maps.ControlPosition.TOP_RIGHT

    geo.options = defaults
    return geo.options
    # geo.options = $.extend({}, defaults, options)

  setPosition: (data)->
    position = data.position
    user     = data.user
    marker   = geo.markers[user.nickname]
    latLng   = new google.maps.LatLng(position.x, position.y)
    gc.log(data)
    gc.log(user)

    if marker
      gc.log("#{user.nickname}:position:update", position.x, position.y)
      marker.setPosition(latLng)
      return

    gc.log("#{user.nickname}:position:new", position.x, position.y)

    icon = new google.maps.MarkerImage(
      "#{user.image}",
      new google.maps.Size(50,50),
      new google.maps.Point(0,0),
      new google.maps.Point(0,25)
    )

    shadow = new google.maps.MarkerImage(
      'http://www.kith-kin.co.uk/assets/blog/black_pixel.gif',
      new google.maps.Size(52,52),
      new google.maps.Point(0,0),
      new google.maps.Point(2,27)
    )

    geo.markers[user.nickname] = new google.maps.Marker
      position:  latLng
      map:       geo.map
      draggable: false
      icon:      icon
      shadow:    shadow

    gc.log(geo.markers, geo.markers[user.nickname])

  getUserPosition: (options)->

    onSuccess = (position)->
      position =
        x: position.coords.latitude
        y: position.coords.longitude

      gc.log('position:new', position.x, position.y)

      # if geo.position and !options
        # if position.x is geo.position.x and position.y is geo.position.y
          # return

      geo.latLng   = new google.maps.LatLng(position.x, position.y)
      geo.position = position

      if options
        if options.init

          # icon = new google.maps.MarkerImage(
          #   "#{gc.USER_IMAGE}",
          #   new google.maps.Size(50,50),
          #   new google.maps.Point(0,0),
          #   new google.maps.Point(0,25)
          # )

          # shadow = new google.maps.MarkerImage(
          #   'http://www.kith-kin.co.uk/assets/blog/black_pixel.gif',
          #   new google.maps.Size(52,52),
          #   new google.maps.Point(0,0),
          #   new google.maps.Point(2,27)
          # )

          # geo.userMarker = new google.maps.Marker
          #   position:  geo.latLng
          #   map:       geo.map
          #   draggable: false
          #   icon:      icon
          #   shadow:    shadow

          geo.center(geo.latLng, 13)
          chat.sendPosition(position)
          gc.log('marker:set')
          return

      # geo.userMarker.setPosition(geo.latLng)
      chat.sendPosition(position)
      gc.log('marker:update')

    onError = (error)->
      gc.log(error)

    apiOptions=
      maximumAge: 10000
      timeout: 5000
      enableHighAccuracy: true

    navigator.geolocation.getCurrentPosition(onSuccess, onError, apiOptions)
