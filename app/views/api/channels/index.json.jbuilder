@channels.each do |channel|
  json.set! message.id do
    json.partial! "api/channels/channel", channel: channel
  end
end
