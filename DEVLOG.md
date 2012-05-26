# Dev Log

## 2012 May 25

### So many updates!

* Pusher presence channels have been added and are working like a charm
* 404 behavior added to the channels router
* Messages and members style overhauled
    * width switches too 100% below 480px screen width
* Made the global nav menu responsive
* Added support for sharing location of multiple users at a time
* Everything behaves as it should when members join or leave a channel
  * User avatar removed from map and members pane
* Send button removed in favor of binding send to enter key
* Changed staging server and repo names to reflect name change
  * [geochat-staging.herokuapp.com](http://geochat-staging.herokuapp.com)
* Moved new pusher credentials to env variables to keep them out of git

### OH NO!

Catastrophic failure! I migrated the application to the new heroku
instance and added the Pusher add-on, but the new pusher credentials
I got from pusher aren't working!

```
Pusher : Error : {"type":"PusherError","data":{"code":null,"message":"Invalid key '[NEW PUSHER KEY]'"}}
```

It works fine if I revert to the old credentials in development,
but the new heroku app is irrevocably associated with the new pusher
app on production. I tried removing the add-on and doing it over,
but I'm getting the same error with a fresh set of credentials
(both locally and in production). Looks like I'll have to send Pusher
an e-mail.

#### Update

Apparently making the pusher credentials environmental variables is the
cause of this fiasco. I was making the pusher key available to the
front end via a constants.js.coffee file, but it appears Heroku doesn't
make environmental variables available to the asset pipeline during
slug compilation, so on production the `gc.PUSHER_KEY` constant was an
empty string. This still doesn't explain why I was getting the error
on development, but that issue appears to have gone away for no reason.

### Remaining issues:

* Need visual indicators for:
  * New messages
  * Members joining and leaving

* Strange mobile browser behavior
  * Messages are successfully sent via pusher
    * Don't appear on mobile browsers
    * Do appear on desktop/laptop browsers

* Channels should belong to users
  * Channel models should act as favoriting system

* Should have method for inviting users to a channel
  * Twitter DM?

* Front end file sizes are not ideal for mobile
  * Consider [Ender](http://ender.no.de) as an alternative?

### Goals

* Basic Documentation and Testing
  * JavaDoc
  * Jasmine

* Article
  * Pros, cons, perils and pitfalls of working with geolocation, sockets

* Analytics
* Error tracking

### Proposed Timeline

#### Week 9 (May 28 - June 3)

* Code
  * Resolve as many issues as possible
  * Documentation
  * Testing

* Article
  * Outline

#### Week 10 (June 4 - June 10)

* Code
  * Finalize

* Presentation
  * Outline

* Article
  * Draft

#### Finals Week (June 11 - June 13)

* Presentation
  * Present

* Article
  * Publish

* Code
  * Analytics
  * Error tracking
  * Open source it

## 2012 May 6

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

### Sidenote: Coffeescript is awesome.

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

## 2012 May 5

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

### Next Steps

* Creating a complex icon using Twitter profile pic to represent user on map
* Tracking and displaying multiple users at a time
* Improving chat interface
* Improving layout and design, especially for index

### Addendum

I'm starting to notice that the Geolocation API
(navigator.geolocation.getCurrentPosition) doesn't always work, and the default
timeout is infinite (!!). Going to have to figure out a workaround. I've been
having particularly bad results with Firefox, and have found a lot of
complaints around the web about Firefox's implementation (see this
[Stack Overflow thread](http://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt)).
Chrome has been working great all week but as a few minutes ago it's not
responding, and neither is Firefox, but Safari is now working. I'll keep
looking into it.

## 2012 April 20 2:15pm

Twitter Authentication is working. Requires a consumer key and secret provided
by Twitter when registering a new application. They are referenced in
`config/initializers/omniauth.rb` as `ENV['MAPCHAT_CONSUMER_KEY']` and
`ENV['MAPCHAT_CONSUMER_SECRET']`. I'm storing them locally as environmental
variables so as to not expose the application's OAuth keys.

I used two tutorials (from [ASCIIcasts](http://asciicasts.com/episodes/241-simple-omniauth)
and [42floors](http://42floors.com/blog/posts/user-authentication-with-rails-and-backbone-js))
to get this far.

### Questions for Chuck

What's the best way to implement a find_or_create type of method once we get
user info from Twitter? Right now it's just calling `create!`, which I'm
guessing overwrites the last user with the same info.

The next big hurdle is figuring out how to turn this into an authentication
API while still delegating authentication to Twitter. I have no idea how to do
this. I did find an interesting REST-based ORM  called
[Her](https://github.com/remiprev/her) that seems to play nice with Rails and
acts more or less like ActiveRecord. Might be worth investigating for this
project.
