# json.array!(@collections) do |collection|
#   json.title collection.title
#   json.id collection.id
# end
@collections.each do |collection|
  json.set! collection.id do
    json.id collection.id
    json.title collection.title
    json.subscription_ids collection.subscription_ids
    json.subscriptions collection.subscriptions
  end
end
