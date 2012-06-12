class ChannelsController < ApplicationController
  before_filter :authenticated?
  respond_to :json

  def index
    @channels = current_user.channels

    respond_with @channels
  end

  def create
    @channel = current_user.channels.build(params[:channel])

    if @channel.save
      respond_with @channel
    else
      respond_with @channel.errors
    end
  end

  def destroy
    @channel = current_user.channels.find(params[:id])
    @channel.destroy

    respond_with :no_content
  end
end
