class Api::UsersController < ApplicationController
  before_action :require_logged_in

  def index
    @users = User.all
    render "api/users/index"
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: ["User doesn't exists"], status: 404
    end
  end

  def create
    debugger
    @user = User.new(user_params)
    if @user.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = user.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = user.find(params[:id])
    if @user
      @user.destroy
    else
      render json: ["User doesn't exists"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
