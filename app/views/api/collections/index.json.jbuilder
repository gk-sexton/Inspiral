json.array!(@collections) do |collection|
  json.partial! 'api/collections/collection', collection: collection
end
