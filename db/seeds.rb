# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Subscription.destroy_all
Message.destroy_all

# Users
ron = User.create(username: 'ron', email: 'ronariav@gmail.com', password: '123456')
peyton = User.create(username: 'peyton', email: 'peyton@gmail.com', password: 'password')
eli = User.create(username: 'eli', email: 'eli@gmail.com', password: 'password')
guest1 = User.create(username: 'guest1', email: 'guest1@example.com', password: 'password')
guest2 = User.create(username: 'guest2', email: 'guest2@example.com', password: 'password')

# Channels
general = Channel.create(name: 'general', description: 'Welcome to sleek!')
sports = Channel.create(name: 'sports', description: 'Everything sports related')

eli_peyton_dm = Channel.create(name: peyton.username, is_dm: true)
# peyton_eli_dm = Channel.create(name: eli.username, is_dm: true)

# Subscriptions
ron_in_general = Subscription.create(user: ron, channel: general)
ron_in_sports = Subscription.create(user: ron, channel: sports)

guest1_in_general = Subscription.create(user: guest1, channel: general)
guest2_in_general = Subscription.create(user: guest2, channel: general)

peyton_in_general = Subscription.create(user: peyton, channel: general)
peyton_in_sports = Subscription.create(user: peyton, channel: sports)
# peyton_eli_dm_sub = Subscription.create(user: peyton, channel: peyton_eli_dm)
eli_peyton_dm_sub1 = Subscription.create(user: peyton, channel: eli_peyton_dm)

eli_in_general = Subscription.create(user: eli, channel: general)
eli_in_sports = Subscription.create(user: eli, channel: sports)
eli_peyton_dm_sub2 = Subscription.create(user: eli, channel: eli_peyton_dm)

# Messages
general1 = Message.create(body: "Hello there", author: guest1, channel: general)
general2 = Message.create(body: "Hi. How are you?", author: guest2, channel: general)
general3 = Message.create(body: "I'm doing great, you?", author: guest1, channel: general)
general4 = Message.create(body: "I'm doing meh", author: guest2, channel: general)

sports1 = Message.create(body: "Hi guyes", author: ron, channel: sports)
sports2 = Message.create(body: "Hi loser", author: peyton, channel: sports)
sports3 = Message.create(body: "Hi butthead", author: eli, channel: sports)

eli_peyton_dm1 = Message.create(body: "Peyton, does it hurt to know that I'm so much better than you?", author: eli, channel: eli_peyton_dm)
eli_peyton_dm2 = Message.create(body: "Keep dreaming kid", author: peyton, channel: eli_peyton_dm)
eli_peyton_dm3 = Message.create(body: "Just wait until I win another superbowl", author: eli, channel: eli_peyton_dm)
eli_peyton_dm4 = Message.create(body: "As i said, keep dreaming kid", author: peyton, channel: eli_peyton_dm)
