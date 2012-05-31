class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authenticated?
    if current_user.present?
      return true
    else
      render :layout => false, :file => "public/401.html", :status => :unauthorized
      return false
    end
  end
end
