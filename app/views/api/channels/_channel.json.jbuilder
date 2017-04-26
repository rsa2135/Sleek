
json.extract! channel, :id, :name, :description, :private, :is_dm, :created_at
json.creator channel.creator.username
json.count channel.users.length
