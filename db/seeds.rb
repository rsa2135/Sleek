# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

ron = User.create(username: 'ron', email: 'ronariav@gmail.com', password: '123456')
guest1 = User.create(username: 'guest1', email: 'guest1@example.com', password: 'password')
guest2 = User.create(username: 'guest2', email: 'guest2@example.com', password: 'password')
