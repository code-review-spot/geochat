class SessionsController < ApplicationController
  def create
    # raise request.env["omniauth.auth"].to_yaml
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:user_id] = @user.id
    redirect_to root_url, :notice => "Signed in!"
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Signed out!"
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
