class Api::ChannelsController < ApplicationController
  before_filter :require_logged_in

  def index
    @channels = Channel.includes(:users).all
    render :index
  end

  def show
    @channel = Channel.includes(:users).find(params[:id])
    render :show
  end

  def create
    if params[:dms]
      dm_name_arr = []
      @users = []
      params[:dms].each do |dm|
        dm_name_arr << params[:dms][dm][:username]
        @users.push(User.find(params[:dms][dm][:id]))
      end
      dm_name = dm_name_arr.sort.join(', ')
      @channel = Channel.new(name: dm_name, is_dm: true, creator:current_user)
    else
      @channel = Channel.new(channel_params)
      @channel.creator = current_user
    end
    @subscription = Subscription.new(
      user: current_user,
      channel: @channel
    )
    if @channel.save && @subscription.save
      if @users
        @users.each do |user|
          Subscription.create(user: user, channel: @channel)
        end
      end
      render :show
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_parmas)
      render :show
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :show
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :private, :is_dm)
  end
end
