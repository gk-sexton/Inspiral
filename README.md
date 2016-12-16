# Inspiral

[[Live on Heroku]](https://inspiralfs.herokuapp.com/)

Inspiral is an RSS feed aggregator based off Feedly. It allows users to easily categorize and view RSS feeds in one place. The framework will be built using Ruby on Rails and React/Redux with a PostgreSQL databse.

## Database: Collections and Subscriptions
The Inspiral database organizes users' RSS feeds through two main tables (`collections`, `subscriptions`) and a related join table(`taggings`). The `collection` table has a `title` column and `user_id` foreign key, where `title` is unique to `user_id`s. The `subscriptions` table has columns for `feed_title`, `url`, and `user_id`. `feed_title` and `url` are unqiue to `user_id` as well. `taggings` stores `collection_id`s and `subscription`s, supporting a many-to-many relationship between the two.

## Rendering: Login
Accessing Inspiral causes the app to immediately check the locally logged-in user. If one is not found, the site redirects to `/gate`, blocking access to any other part of the site. The `gate` component is rendered here, providing some landing-page information and options to log in, sign up, or access the site as a guest. Choosing to log in or sign up opens a modal, displaying a modular form dependent on which option was chosen. Successfully registering an account triggers an automatic log-in attempt. Logging in redirects the user to `/home`.
![gate](/docs/wireframes/landing-page.png)
## Rendering: Home
Once logged in, the user is presented with the `app` and `home` components. `app` is responsible for rendering the left sidebar(a list of the users collections and options to return to home, add a new collections, and a a new RSS feed) and header. These components will be visible as long as the user is logged in. The sidebar also houses a constrained modal that opens the form to add a new collection.
![home](/docs/wireframes/main-feed-card-hidden.png)

## Rendering: New Feed
Clicking the `New Feed` button directs the user to `/home/newfeed`, which contains the `newfeed` component. This opens a form in the main block of the page that requests a url, nickname for the new feed, and prompts the user to choose collections to associate through checkboxes. Submitting a new feed directs back to `/home`.
![newfeed](/docs/wireframes/new-feed-form.png)


## Rendering: Collections
The displayed collections in the sidebar each link to their unique url at `/home/collections/:id`. All collections render the same `collection` component, which adjusts its contents depending on the currently chosen collection. The `collection` component has a title bar beneath the header, a right sidebar that displays the currently viewed subscriptions, and a central display that houses articles in a scrolling list.

## Accessing RSS feeds
Upon successful log-ins, the app automatically uses the user's subscriptions to send `GET` requests to each URL. The articles are all stored in the state under keys to their corresponding subscription ID. The active collection can than use the IDs to identify which articles it needs to render.

### Additions and Fixes to do
* Proper error rendering to the NewFeed component
* User profile (usage statistics, sharing/pinning, avatar upload)
* Individual management of subscriptions
* Editting collections and subscriptions
* Displaying individual subscriptions
* Restricting articles in normal view, clickable expanded view
* Better/cleaner styling. Switch to .scss
* Search functionality(suggested feeds)
* List and Card views
* View shuffle function

### Future Directions
* Add tag/keyword tracking
* Add filters
* Browswer extension to identify the current pages RSS/XML url and add it to your Inspiral account
