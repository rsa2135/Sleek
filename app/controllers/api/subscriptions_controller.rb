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
        .includes(:user)
    end

    render :index
  end

end
