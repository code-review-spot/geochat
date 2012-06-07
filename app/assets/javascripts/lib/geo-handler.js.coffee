window.geo =
  bounds: null
  map: null
  markers: {}
  oms: null
  position: null

  geocoder: new google.maps.Geocoder()
  latLng: new google.maps.LatLng(39.102431, -94.583698)

  init: ->
    geo.setOptions()

    geo.map = new google.maps.Map(document.getElementById('map'), geo.options)
    geo.oms = new OverlappingMarkerSpiderfier geo.map,
      circleFootSeparation: 50
      circleSpiralSwitchover: Infinity
      legWeight: 2

    geo.bounds = new google.maps.LatLngBounds()

    geo.getUserPosition { init: true }

    # window.trackPosition = setInterval ->
    #   do geo.setUserPosition
    # , 5000

  reset: ->
    geo.bounds   = null
    geo.map      = null
    geo.markers  = {}
    geo.oms      = null
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

  setOptions: (options)->
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

    geo.options = $.extend({}, defaults, options)

  setPosition: (data)->
    position = data.position
    user     = data.user

    latLng   = new google.maps.LatLng(position.x, position.y)
    marker   = geo.markers[user.nickname]

    if marker
      marker.setPosition(latLng)
      geo.bounds.extend(latLng)
      return

    icon = new google.maps.MarkerImage(
      "#{user.image}",
      new google.maps.Size(50,50),
      new google.maps.Point(0,0),
      new google.maps.Point(12,12),
      new google.maps.Size(24,24)
    )

    shadow = new google.maps.MarkerImage(
      'http://www.kith-kin.co.uk/assets/blog/black_pixel.gif',
      new google.maps.Size(26,26),
      new google.maps.Point(0,0),
      new google.maps.Point(13,13)
    )

    geo.markers[user.nickname] = marker = new google.maps.Marker
      position:  latLng
      map:       geo.map
      draggable: false
      icon:      icon
      shadow:    shadow

    geo.oms.addMarker(marker)
    geo.bounds.extend(latLng)
    geo.map.fitBounds(geo.bounds)

  getUserPosition: (options)->

    onSuccess = (position)->
      position =
        x: position.coords.latitude
        y: position.coords.longitude

      geo.latLng   = new google.maps.LatLng(position.x, position.y)
      geo.position = position

      if options
        if options.init

          geo.center(geo.latLng, 13)
          chat.getAllPositions()
          return

      chat.sendPosition(position)

    onError = (error)->
      gc.log(error)

    apiOptions=
      maximumAge: 10000
      timeout: 5000
      enableHighAccuracy: true

    navigator.geolocation.getCurrentPosition(onSuccess, onError, apiOptions)
