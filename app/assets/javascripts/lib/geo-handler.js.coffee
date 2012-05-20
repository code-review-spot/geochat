window.geo =
  map: null
  markers: []
  position: null
  userMarker: null

  geocoder: new google.maps.Geocoder()
  location: new google.maps.LatLng(39.102431, -94.583698)

  init: ->
    geo.setOptions()

    geo.map = new google.maps.Map(document.getElementById('map'), geo.options)

    geo.setUserPosition { init: true }

    # window.trackPosition = setInterval ->
    #   do geo.setUserPosition
    # , 5000

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
      zoom:               4
      mapTypeId:          google.maps.MapTypeId.ROADMAP
      center:             geo.location
      streetViewControl:  false
      scaleControl:       false
      scrollwheel:        true
      mapTypeControl:     false
      overviewMapControl: false
      zoomControl:        false
      rotateControl:      false
      panControl:         false

    geo.options = defaults
    return geo.options
    # geo.options = $.extend({}, defaults, options)

  setUserPosition: (options)->

    onSuccess = (position)->
      position =
        x: position.coords.latitude
        y: position.coords.longitude

      gc.log('position:new', position.x, position.y)

      if geo.position and !options
        if position.x is geo.position.x and position.y is geo.position.y
          return

      latLng = new google.maps.LatLng(position.x, position.y)
      geo.location = latLng
      geo.position = position

      if options
        if options.init
          icon = new google.maps.MarkerImage(
            "#{gc.USER_IMAGE}",
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

          geo.userMarker = new google.maps.Marker
            position:  geo.location
            map:       geo.map
            draggable: false
            icon:      icon
            shadow:    shadow

          geo.center(latLng, 14)
          return

      geo.userMarker.setPosition(geo.location)
      gc.log('marker:update')

    onError = (error)->
      gc.log(error)

    apiOptions=
      maximumAge: 10000
      timeout: 5000
      enableHighAccuracy: true

    navigator.geolocation.getCurrentPosition(onSuccess, onError, apiOptions)
