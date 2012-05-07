# GeoChat

Chat on a map

current staging location: [map-chat-staging.herokuapp.com](http://map-chat-staging.herokuapp.com/)

## Dev Log

### 2012 May 6

I may have found the reason why the `getCurrentPosition` function was behaving
oddly. Chrome uses Google's browser location API to get a location, and this
API has a daily cap on queries (the limit is unspecified, haven't found any
documentation, let alone any mention that this API exists other than the fact
that the URL contained the words "google", "api", and "browser location").

I was able to discover this issue by digging into some more documentation on the
subject ([PhoneGap](http://docs.phonegap.com/en/1.0.0/phonegap_geolocation_geolocation.md.html)
helped me digest some of the jargon from the [W3C spec](http://dev.w3.org/geo/api/spec-source.html)).
`getCurrentPosition` can accept up to three parameters: a success callback, an
error callback, and an options hash. Apparently if you don't explicity define a
timeout in the options hash it defaults to infinite in some browsers, and if
you don't provide an error handler it fails silently. Neither behaviors are
what I would have hoped for but there do seem to be ways to work around them.

The error I got from Chrome was a "QUERY LIMIT EXCEEDED" message which the
Geolocation API simply interpreted as a malformed response. The error I got from
Firefox was more obtuse: a simple "location request denied". As of today the
request is working fine in both browsers - I've defaulted to only requesting
the location once per session for now. If this project moves to mobile I can
make use of the `watchPosition` method which theoretically wouldn't have a query
limit since the requests would be made to the user's device instead of a
third party API (on a sidenote I noticed the query limit from Chrome spit back
a URL with a query string containing the names and MAC addresses of every wifi
router in the vicinity -- kind of weird).

All the changes I've made can be seen in the `geo-handler.js.coffee` file.

#### Sidenote: Coffeescript is awesome.

```
if geo.markers? then marker.setMap(null) for marker in geo.markers
```

is equivalent to..

```
if (geo.markers != null) {
  _ref = geo.markers;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    marker = _ref[_i];
    _results.push(marker.setMap(null));
  }
  return _results;
}
```

### 2012 May 5

Happy Cinco de Mayo! Looks like I should have been pushing to github and
keeping up with the dev log a bit more. Oops! Here's what I've done since the
last update:

* Using Backbone.js for all routing and higher-level front end stuff
* Created channel scaffolding to deal with channel CRUD
  * Thinking of ditching this in favor of simply subscribing to a pusher channel iff there's a way to query pusher for the number of users subscribed to a given channel at any time
* Using Twitter Bootstrap for now to make life easier for prototyping
* Using the [Geolocation API](http://dev.w3.org/geo/api/spec-source.html) to get user's location
  * Tracking every 5 seconds using setInterval
  * Using a simple gMaps marker to track location for now
    * marker position updates dynamically (no delete & recreate, found the setPosition method)
* Got pusher working (using the Heroku add-on)
* Got basic chat working

#### Next Steps

* Creating a complex icon using Twitter profile pic to represent user on map
* Tracking and displaying multiple users at a time
* Improving chat interface
* Improving layout and design, especially for index

#### Addendum

I'm starting to notice that the Geolocation API
(navigator.geolocation.getCurrentPosition) doesn't always work, and the default
timeout is infinite (!!). Going to have to figure out a workaround. I've been
having particularly bad results with Firefox, and have found a lot of
complaints around the web about Firefox's implementation (see this
[Stack Overflow thread](http://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt)).
Chrome has been working great all week but as a few minutes ago it's not
responding, and neither is Firefox, but Safari is now working. I'll keep
looking into it.

### 2012 April 20 2:15pm

Twitter Authentication is working. Requires a consumer key and secret provided
by Twitter when registering a new application. They are referenced in
`config/initializers/omniauth.rb` as `ENV['MAPCHAT_CONSUMER_KEY']` and
`ENV['MAPCHAT_CONSUMER_SECRET']`. I'm storing them locally as environmental
variables so as to not expose the application's OAuth keys.

I used two tutorials (from [ASCIIcasts](http://asciicasts.com/episodes/241-simple-omniauth)
and [42floors](http://42floors.com/blog/posts/user-authentication-with-rails-and-backbone-js))
to get this far.

#### Questions for Chuck

What's the best way to implement a find_or_create type of method once we get
user info from Twitter? Right now it's just calling `create!`, which I'm
guessing overwrites the last user with the same info.

The next big hurdle is figuring out how to turn this into an authentication
API while still delegating authentication to Twitter. I have no idea how to do
this. I did find an interesting REST-based ORM  called
[Her](https://github.com/remiprev/her) that seems to play nice with Rails and
acts more or less like ActiveRecord. Might be worth investigating for this
project.
