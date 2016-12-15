# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u = User.create(username: 'Guest', password: 'youllneverguestit' , email: 'guest@mail.fo')

Collection.destroy_all
a = Collection.create(title: 'Collection A', user_id: u.id)
b = Collection.create(title: 'Collection B', user_id: u.id)
c = Collection.create(title: 'Collection C', user_id: u.id)

Subscription.destroy_all
s1 = Subscription.create(feed_title: 'Sub 1' , user_id: u.id, url: 'youtube.com')
s2 = Subscription.create(feed_title: 'Sub 2' , user_id: u.id, url: 'somethinsomethin.com')
s3 = Subscription.create(feed_title: 'Sub 3' , user_id: u.id, url: 'pls.ru')

Tagging.destroy_all
Tagging.create(collection_id: a.id, subscription_id: s1.id)
Tagging.create(collection_id: a.id, subscription_id: s2.id)
Tagging.create(collection_id: a.id, subscription_id: s3.id)
Tagging.create(collection_id: b.id, subscription_id: s1.id)
Tagging.create(collection_id: b.id, subscription_id: s2.id)
Tagging.create(collection_id: c.id, subscription_id: s1.id)
