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
    @channel = Channel.new(channel_params)
    @subscription = Subscription.create(
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
