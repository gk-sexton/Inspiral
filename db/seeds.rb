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
a = Collection.create(title: 'Economics', user_id: u.id)
b = Collection.create(title: 'Tech', user_id: u.id)
c = Collection.create(title: 'Culture', user_id: u.id)
d = Collection.create(title: 'Art', user_id: u.id)
e = Collection.create(title: 'Funny', user_id: u.id)


Subscription.destroy_all
s1 = Subscription.create(feed_title: 'Economist: Economics' , user_id: u.id, url: 'http://www.economist.com/sections/economics/rss.xml')
s2 = Subscription.create(feed_title: 'Economist: Tech' , user_id: u.id, url: 'http://www.economist.com/sections/science-technology/rss.xml')
s3 = Subscription.create(feed_title: 'Economist: Culture' , user_id: u.id, url: 'http://www.economist.com/sections/culture/rss.xml')
s4 = Subscription.create(feed_title: 'Pinterest: Water Color' , user_id: u.id, url: 'https://www.pinterest.com/keatsmcknight/watercolor-painting.rss')
s5 = Subscription.create(feed_title: 'PDL' , user_id: u.id, url: 'http://pdlcomics.tumblr.com/rss')

Tagging.destroy_all
Tagging.create(collection_id: a.id, subscription_id: s1.id)
Tagging.create(collection_id: b.id, subscription_id: s2.id)
Tagging.create(collection_id: c.id, subscription_id: s3.id)
Tagging.create(collection_id: d.id, subscription_id: s4.id)
Tagging.create(collection_id: d.id, subscription_id: s5.id)
Tagging.create(collection_id: e.id, subscription_id: s5.id)
