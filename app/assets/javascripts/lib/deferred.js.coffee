window.deferred =
  init: ()->
    window.dfd ?= new $.Deferred()
    window.deferred.initialized = true
    return window.deferred
  resolve: ()->
    if window.deferred.initialized then window.dfd.resolve()
    return window.deferred
  initialized: false

