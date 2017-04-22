class Api::MessagesController < ApplicationController
  before_filter :require_logged_in

  def index
    @messages = Message.all.includes(:author)
    render :index
  end

  def show
    @message = Message.find(params[:id])
    render :show
  end

  def create
    @message = Message.new(message_params)
    @message.author = current_user
    if @message.save
      Pusher.trigger("#{@message.channel_id}", 'message_sent', {})
      render :show
    else
      render json: @message.errors.full_messages, status: 400
    end
  end

  def update
    @message = Message.find(params[:id])
    if @message.update(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 400
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render :show
  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
