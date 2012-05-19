class MessagesController < ApplicationController
  def create
    if EM.reactor_running?
      # Heroku apps run inside eventmachine so we can make API calls to pusher
      # outside the request-response cycle
      Pusher["presence-#{params[:channel]}"].trigger_async('message', {
        :nickname => current_user.nickname,
        :text => params[:text]
      })
    else
      Pusher["presence-#{params[:channel]}"].trigger('message', {
        :user_id => session[:user_id],
        :text => params[:text]
      })
    end
    head :ok
  end
end
