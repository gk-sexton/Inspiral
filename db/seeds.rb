# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
a = User.create(username: 'Guest', password: 'youllneverguestit' , email: 'guest@mail.fo')

Collection.destroy_all
Collection.create(title: 'Collection A', user_id: a.id)
Collection.create(title: 'Collection B', user_id: a.id)
Collection.create(title: 'Collection C', user_id: a.id)
