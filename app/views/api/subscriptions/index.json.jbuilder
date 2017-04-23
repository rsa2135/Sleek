@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.partial! "api/subscriptions/subscription", subscription: subscription
  end
end
