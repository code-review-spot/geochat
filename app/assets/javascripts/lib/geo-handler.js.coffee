window.geo =
  map: null
  markers: []
  position: null
  userMarker: null

  geocoder: new google.maps.Geocoder()
  location: new google.maps.LatLng(39.102431, -94.583698)

  init: ()->
    geo.setOptions()
    geo.map = new google.maps.Map(document.getElementById('map'), geo.options)

    if geo.position
      geo.center(geo.location, 14)
    else
      geo.setUserPosition { init: true }

    window.trackPosition = setInterval ->
      do geo.setUserPosition
    , 5000

  code: (query, cb) ->
    geo.geocoder.geocode { 'address': query }, (res, status) ->
      if status is google.maps.GeocoderStatus.OK
        location = res[0].geometry.location
        if cb then return cb(location)
        return location
      else
        if cb then return cb(false)
        return false

  center: (location, zoom) ->
    geo.map.setCenter(location)
    geo.map.setZoom(zoom) if zoom

  clear: ->
    if geo.markers
      for i in geo.markers
        i.setMap(null)

  setOptions: ()->
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
    navigator.geolocation.getCurrentPosition (position) ->
      position =
        x: position.coords.latitude
        y: position.coords.longitude

      if geo.position and !options
        if position.x is geo.position.x and position.y is geo.position.y
          return

      gc.log('tracking: new position', position.x, position.y)

      latLng = new google.maps.LatLng(position.x, position.y)
      geo.location = latLng
      geo.position = position

      if !geo.userMarker
        geo.userMarker = new google.maps.Marker {
          position:  geo.location
          map:       geo.map
          draggable: false
        }
      else
        geo.userMarker.setPosition(geo.location)

      if options
        if options.init then geo.center(latLng, 14)
