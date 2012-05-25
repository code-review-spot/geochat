Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['GEOCHAT_CONSUMER_KEY'], ENV['GEOCHAT_CONSUMER_SECRET']
end
