class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )
    if @user
      login!(@user)
    else
      render json: ["invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @uesr
      logout!(@user)
    else
      render json: ["No user is logged in"], status 404
    end
  end
end
