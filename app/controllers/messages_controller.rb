class MessagesController < ApplicationController
  include PusherTrigger
  before_filter :authenticated?
  respond_to :json

  def create
    data = {
      :nickname => current_user.nickname,
      :text => params[:text]
    }

    trigger("presence-#{params[:channel]}", 'message', data)
    head :ok
  end
end
