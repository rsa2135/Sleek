class Api::ChannelsController < ApplicationController
  before_filter :require_logged_in

  def index
    @channels = Channel.includes(:users).all
    render :index
  end

  def show
    @channel = Channel.find(params[:id])
    render :show
  end

  def create
    if params[:dms]
      dm_name = ""
      params[:dms].each do |dm|
        puts "#{params[:dms][dm][:username]}"
        dm_name += "#{params[:dms][dm][:username]},"
      end
      dm_name = dm_name[0..-2]
      @channel = Channel.new(name: dm_name, is_dm: true, creator:current_user)
    else
      @channel = Channel.new(channel_params)
      @channel.creator = current_user
    end
    debugger
    @subscription = Subscription.new(
      user: current_user,
      channel: @channel
    )
    if @channel.save && @subscription.save
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
