@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.id subscription.id
    json.feed_title subscription.feed_title
    json.url subscription.url
    json.user_id subscription.user_id
    json.collection_ids subscription.collection_ids
  end
end
