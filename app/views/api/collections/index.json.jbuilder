json.array!(@collections) do |collection|
  json.title collection.title
  json.id collection.id
end
