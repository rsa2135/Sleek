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






# NEW SEEDS!!!!
#########
# USERS #
ron = User.create(username: 'ron', email: 'ronariav@gmail.com', password: '123456')
peyton = User.create(username: 'peyton', email: 'peyton@gmail.com', password: 'password')
eli = User.create(username: 'eli', email: 'eli@gmail.com', password: 'password')

guest1 = User.create(username: 'guest1', email: 'guest1@example.com', password: 'password')
guest2 = User.create(username: 'guest2', email: 'guest2@example.com', password: 'password')
#########

# Dumb and dumber
lloyd = User.create(username: 'lloyd', email: 'lloyd@gmail.com', password: '123456')
harry = User.create(username: 'harry', email: 'harryd@gmail.com', password: '123456')

# Snatch
turkish = User.create(username: 'turkish', email: 'turkish@gmail.com', password: '123456')
tommy = User.create(username: 'tommy', email: 'tommy@gmail.com', password: '123456')
micky = User.create(username: 'micky', email: 'micky@gmail.com', password: '123456')

# Man Utd.
scholes = User.create(username: 'scholes', email: 'scholes@gmail.com', password: '123456')
giggsy = User.create(username: 'giggsy', email: 'giggsy@gmail.com', password: '123456')
cantona =  User.create(username: 'cantona', email: 'cantona@gmail.com', password: '123456')
beckham = User.create(username: 'beckham', email: 'beckham@gmail.com', password: '123456')

# blondie


############
# CHANNELS #
############
# general
general = Channel.create(name: 'general', description: 'Welcome to sleek!', creator: ron)

#sports
sports = Channel.create(name: 'sports', description: 'Everything sports related', creator: ron)

# testing ground
testing = Channel.create(name: 'testing ground', description: 'Shenanigans', creator: guest2)

# dumb and dumber
dumb_and_dumber = Channel.create(name: 'dumb and dumber', description: 'Comic relief', creator: guest1)
dumb_and_dumber_private = Channel.create(name: 'Thew crew', description: 'Inside jokes', creator: lloyd, private: true)

# snatch
snatch = Channel.create(name: 'snatch', description: "D'ya like dags?", creator: guest2)



# man utd.
manutd = Channel.create(name: 'man utd', description: "Glory glory", creator: beckham)

# React
react = Channel.create(name: 'react', creator: ron)

# Redux
redux = Channel.create(name: 'redux', creator: ron)


############
# MESSAGES #
############



# OLD SEED
# Users
# ron = User.create(username: 'ron', email: 'ronariav@gmail.com', password: '123456')
# peyton = User.create(username: 'peyton', email: 'peyton@gmail.com', password: 'password')
# eli = User.create(username: 'eli', email: 'eli@gmail.com', password: 'password')
# guest1 = User.create(username: 'guest1', email: 'guest1@example.com', password: 'password')
# guest2 = User.create(username: 'guest2', email: 'guest2@example.com', password: 'password')

# Channels
# general = Channel.create(name: 'general', description: 'Welcome to sleek!', creator: ron)
# app_academy = Channel.create(name: 'app academy', description: 'Hello a/A students', creator: ron)
# sports = Channel.create(name: 'sports', description: 'Everything sports related', creator: peyton)
guest1_guest2_dm = Channel.create(name: "#{guest1.username},#{guest2.username}", is_dm: true, creator: guest1)

eli_peyton_dm = Channel.create(name: peyton.username, is_dm: true, creator: eli)
# peyton_eli_dm = Channel.create(name: eli.username, is_dm: true)

# Subscriptions
ron_in_general = Subscription.create(user: ron, channel: general)
ron_in_sports = Subscription.create(user: ron, channel: sports)

guest1_in_general = Subscription.create(user: guest1, channel: general)
guest2_in_general = Subscription.create(user: guest2, channel: general)

# guest1_in_app_academy = Subscription.create(user: guest1, channel: app_academy)
# guest2_in_app_academy = Subscription.create(user: guest2, channel: app_academy)

guest1_guest2_dm_sub = Subscription.create(user: guest1, channel: guest1_guest2_dm)
guest1_guest2_dm_sub = Subscription.create(user: guest2, channel: guest1_guest2_dm)

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
