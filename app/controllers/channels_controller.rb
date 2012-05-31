class ChannelsController < ApplicationController
  before_filter :authenticated?
  respond_to :json

  def index
    @channels = Channel.all

    respond_with @channels
  end

  def create
    @channel = Channel.new(params[:channel])

    if @channel.save
      respond_with @channel, status: :created, location: @channel
    else
      respond_with @channel.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy

    respond_with :no_content
  end
end
