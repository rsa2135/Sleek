json.array! @guests do |guest|
  json.partial! "api/users/user"
end
