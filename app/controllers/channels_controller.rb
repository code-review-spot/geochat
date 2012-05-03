class ChannelsController < ApplicationController
  respond_to :json

  # GET /channels.json
  def index
    @channels = Channel.all

    respond_with @channels
  end

  # GET /channels/1.json
  def show
    @channel = Channel.find(params[:id])
    Pusher["channel_#{params[:id]}"].trigger('msg', {
      :body => "msg sent"
    })

    respond_with @channel
  end

  # GET /channels/new.json
  def new
    @channel = Channel.new

    respond_with @channel
  end

  # GET /channels/1/edit
  def edit
    @channel = Channel.find(params[:id])
  end

  # POST /channels
  # POST /channels.json
  def create
    @channel = Channel.new(params[:channel])

    respond_to do |format|
      if @channel.save
        format.html { redirect_to @channel, notice: 'Channel was successfully created.' }
        format.json { render json: @channel, status: :created, location: @channel }
      else
        format.html { render action: "new" }
        format.json { render json: @channel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /channels/1
  # PUT /channels/1.json
  def update
    @channel = Channel.find(params[:id])

    respond_to do |format|
      if @channel.update_attributes(params[:channel])
        format.html { redirect_to @channel, notice: 'Channel was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @channel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /channels/1
  # DELETE /channels/1.json
  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy

    respond_with :no_content
  end
end
