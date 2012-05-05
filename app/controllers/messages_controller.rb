class MessagesController < ApplicationController

  def create
    Pusher["channel_#{params[:channel]}"].trigger('message', {
      :author => params[:author],
      :body => params[:body]
    })

    respond_to do |format|
      format.json { render json: 'true' }
    end
  end
end
