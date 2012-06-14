# Geochat

real-time, location-aware chat

## Getting Started

There a couple of things you need to do before Geochat will work on your
machine. Assuming you already have a working Ruby environment and
[Bundler](http://gembundler.com/) installed, you can clone the repo in your
terminal like so:

```$ git clone https://github.com/ngoldman/geochat.git```

Then install all the necessary dependencies like so:

```$ bundle install```

Geochat uses sqlite3 as a database for local development, so you shouldn't have
to worry about setting up a database locally. It should just _work_ after
you migrate the database like so:

```$ bundle exec rake db:migrate```

Once that's done, you need to register your app with
[Pusher](http://pusher.com/). You can get a free API account for development
(that's what I'm using right now). If you want to use Heroku for deployment,
you can add Pusher support through their
[Pusher add-on](https://addons.heroku.com/pusher) without needing to register
with Pusher directly.

After you're set up with Pusher, you'll need to add environmental variables.
On development, you'll need the app ID, key and secret provided by Pusher. You
can set them in your bash profile like so:

```
# Geochat Pusher credentials
export GEOCHAT_PUSHER_APP_ID=YOUR_APP_ID
export GEOCHAT_PUSHER_KEY=YOUR_KEY
export GEOCHAT_PUSHER_SECRET=YOUR_SECRET
```

For production, you'll need to add the Pusher key like so:

```
heroku config:add GEOCHAT_PUSHER_KEY=YOUR_PRODUCTION_KEY
```

See the related article for more info:
[Heroku: Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars)

Please note Pusher provides you with two sets of credentials, one for
development and one for production.

Once all of that's done, you should be good to go. Happy coding!

## Current Staging Location

[geochat-staging.herokuapp.com](http://geochat-staging.herokuapp.com)

## License

Geochat is made available under the
[MIT License](http://www.opensource.org/licenses/mit-license.php).
