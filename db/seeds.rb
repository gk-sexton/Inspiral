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
b = Collection.create(title: 'Collection A', user_id: a.id)
c = Collection.create(title: 'Collection B', user_id: a.id)
d = Collection.create(title: 'Collection C', user_id: a.id)

Subscription.destroy_all
e = Subscription.create(feed_title: 'Sub 1' , user_id: a.id, url: 'youtube.com')
d = Subscription.create(feed_title: 'Sub 2' , user_id: a.id, url: 'somethinsomethin.com')
f = Subscription.create(feed_title: 'Sub 3' , user_id: a.id, url: 'pls.ru')

Tagging.destroy_all
Tagging.create(collection_id: b.id, subscription_id: e.id)
Tagging.create(collection_id: b.id, subscription_id: d.id)
Tagging.create(collection_id: b.id, subscription_id: f.id)
Tagging.create(collection_id: c.id, subscription_id: e.id)
Tagging.create(collection_id: c.id, subscription_id: d.id)
Tagging.create(collection_id: d.id, subscription_id: e.id)
