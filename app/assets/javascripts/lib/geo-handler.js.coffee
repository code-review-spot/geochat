window.geo =
  map: null
  markers: []

  geocoder: new google.maps.Geocoder()
  location: new google.maps.LatLng(39.102431, -94.583698)

  code: (geoquery, callback) ->
    geo.geocoder.geocode { 'address': geoquery }, (res, status) ->
      if status == google.maps.GeocoderStatus.OK
        location = res[0].geometry.location
        geo.center(location, 13)
        callback(location) if callback
      else
        callback(false) if callback

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

  init: ()->
    geo.setOptions()
    geo.map = new google.maps.Map(document.getElementById('map'), geo.options)

    if geo.location and geo.position
      geo.center(geo.location, 14)
    else
      console.log('warming up tracker')

    if navigator.geolocation
      window.trackPosition = setInterval ->
        console.log('tracking')
        navigator.geolocation.getCurrentPosition (position) ->
          position =
            x: position.coords.latitude
            y: position.coords.longitude
          if geo.position
            if position.x is geo.position.x and position.y is geo.position.y
              return
          console.log(geo.position)
          console.log('position',position.x, position.y)
          geo.position = position
          latLng = new google.maps.LatLng(position.x, position.y)
          geo.location = latLng
          geo.center(latLng, 14)
      , 5000

console.log('geo ready')
