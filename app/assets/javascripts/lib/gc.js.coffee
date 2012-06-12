# GeoChat Utility Library
# A collection of miscellaneous convenience functions.
#
# Dependencies:
# * jQuery 1.7.2
# * Underscore 1.3.3
# * JS-humanize

# gc global object literal
window.gc ?= {}


# Modified version of Paul Irish's console wrapper.
# Aliases for console.log() and console.warn() that don't break in IE.
# Creates a history array for both methods and outputs logs and warns as
# items in an array (looks nicer on the console).
#
# @param [arguments] Any number of things you want to log or warn.
#
_(['log', 'warn']).each (method)->
  gc[method] = ->
    gc[method].history ?= []
    gc[method].history.push(arguments)
    if gc.DEBUG and window.console
      window.console[method](Array.prototype.slice.call(arguments))


# Wrapper for jQuery's deferred object.
#
# init(): Handles initialization (ensures it will only happen once)
# done(fn): Passes function to be deferred
# resolve(): Resolves object and calls deferred functions sequentially
#
gc.dfd =
  initialized: false
  init: ->
    gc.deferred ?= new $.Deferred()
    gc.dfd.initialized = true
    return gc.dfd
  done: (fn)->
    gc.deferred.done(fn)
  resolve: ->
    if gc.dfd.initialized then gc.deferred.resolve()
    return gc.dfd

# Update <time> elements using datetime property
#
gc.messageTime =
  interval: false
  init: ->
    obj = gc.messageTime
    if !obj.interval
      obj.update()
      obj.interval = setInterval(obj.update, 15000)
  update: (context)->
    context ?= 'body'
    $(context).find('time').each (i)->
      $t = $(@)
      dt = $t.attr('datetime')
      n = Humanize.naturalTime(dt)
      $t.text("sent #{n}")
  clear: ->
    obj = gc.messageTime
    clearInterval(obj.interval)
    obj.interval = false


# Debug bool constant
gc.DEBUG = true
