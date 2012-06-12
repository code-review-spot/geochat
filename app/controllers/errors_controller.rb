class ErrorsController < ApplicationController
  def routing
    @error = {:error => "404"}
    respond_to do |format|
      format.html { render :layout => false }
      format.json { render json: @error, :status => :unprocessable_entity }
    end
  end
end
