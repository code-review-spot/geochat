Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['MAPCHAT_CONSUMER_KEY'], ENV['MAPCHAT_CONSUMER_SECRET']
end
