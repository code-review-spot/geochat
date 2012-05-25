class MessagesController < ApplicationController
  def create
    data = {
      :nickname => current_user.nickname,
      :text => params[:text]
    }
    if EM.reactor_running?
      # Heroku apps run inside eventmachine so we can make API calls to pusher
      # outside the request-response cycle
      Pusher["presence-#{params[:channel]}"].trigger_async('message', data)
    else
      Pusher["presence-#{params[:channel]}"].trigger('message', data)
    end
    head :ok
  end
end
