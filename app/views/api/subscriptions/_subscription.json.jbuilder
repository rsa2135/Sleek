json.extract! subscription, :id, :user_id, :channel_id
json.channel_name subscription.channel.name
json.channel_description subscription.channel.description
json.is_dm subscription.channel.is_dm
json.private subscription.channel.private
