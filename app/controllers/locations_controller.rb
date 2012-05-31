class LocationsController < ApplicationController
  include PusherTrigger
  before_filter :authenticated?
  respond_to :json

  def show
    data = ""

    trigger("presence-#{params[:id]}", 'location_request', data)
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

    trigger("presence-#{params[:channel]}", 'location', data)
    head :ok
  end
end
