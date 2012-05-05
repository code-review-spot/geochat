# GeoChat

Chat on a map

current staging location: [map-chat-staging.herokuapp.com](http://map-chat-staging.herokuapp.com/)

## Dev Log

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

### 2012 April 20 2:15pm

Twitter Authentication is working. Requires a consumer key and secret provided
by Twitter when registering a new application. They are referenced in
`config/initializers/omniauth.rb` as `ENV['MAPCHAT_CONSUMER_KEY']` and
`ENV['MAPCHAT_CONSUMER_SECRET']`. I'm storing them locally as environmental
variables so as to not expose the application's OAuth keys.

I used two tutorials (from [ASCIIcasts](http://asciicasts.com/episodes/241-simple-omniauth) and [42floors](http://42floors.com/blog/posts/user-authentication-with-rails-and-backbone-js)) to get this far.

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
