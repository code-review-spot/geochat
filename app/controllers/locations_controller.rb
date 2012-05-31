class LocationsController < ApplicationController
  before_filter :authenticated?
  respond_to :json

  def show
    data = ""
    if EM.reactor_running?
      Pusher["presence-#{params[:id]}"].trigger_async('location_request', data)
    else
      Pusher["presence-#{params[:id]}"].trigger('location_request', data)
    end
    head :ok
  end

  def create
    data = {
      :position => params[:position],
      :user => {
        :nickname => current_user.nickname,
        :image => current_user.image
      }
    }
    puts data

    if EM.reactor_running?
      Pusher["presence-#{params[:channel]}"].trigger_async('location', data)
    else
      Pusher["presence-#{params[:channel]}"].trigger('location', data)
    end
    head :ok
  end
end
