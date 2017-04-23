json.extract! subscription, :id, :user_id, :channel_id
if params[:user_id]
  json.channel_name subscription.channel.name
else
  json.username subscription.user.username
end
