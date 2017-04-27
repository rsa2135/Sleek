class Api::SubscriptionsController < ApplicationController
  before_filter :require_logged_in

  def index
    if params[:user_id]
      @subscriptions = Subscription
        .where(user_id: params[:user_id])
        .includes(:channel)
    else
      @subscriptions = Subscription
        .where(channel_id: params[:channel_id])
        .includes(:channel)
    end

    render :index
  end

  def create
    @channel = Channel.find(params[:channel_id])
    @subscription = Subscription.new(
      user: current_user,
      channel: @channel
    )
    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 400
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    @subscription.destroy
    render :show
  end

end
