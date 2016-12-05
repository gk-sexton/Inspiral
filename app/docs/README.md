#Inspiral
[[Trello]](https://trello.com/b/FcWefD2k/inspiral)
[[Heroku]](https://secret-wave-93670.herokuapp.com/)  
## Minimum Viable Product
Inspiral is an RSS feed aggregator based off Feedly. It allows users to easily categorize and view RSS feeds in one place. The framework will be built using Ruby on Rails and React/Redux. The goal is to have a smooth, styled, and fully operational site by the deadline. Current criteria is:

- [ ] Account creation, log in/out, and guest/demo usage
- [ ] Development README, later replaced with a production README
- [ ] Collections
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demo feature
- [ ] RSS Feeds
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demo feature
- [ ] Articles
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demo feature
- [ ] Reads
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demo feature


## Reference Docs
[Wireframes](./wireframes)

[API Endpoints](./api-endpoints.md)

[Component Hierarchy](./component-hierarchy.md)

[Sample State](./sample-state.md)

[Schema](./schema.md)

## Development Timeline
### Phase 1: Backend setup and front end user authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication
### Phase 2: Collection model, API, and components (2 days)
**Objective:** Collections can be created, edited, and removed through API, satisfactory styling.
### Phase 3: Subscription model, API, and components (2 days)
**Obejctive:** Subscriptions can be added to and removed from collections, taggings model is finalized, satisfactory styling.
### Phase 4: Welcome page (2 days)
**Objective:** Welcome page has functional login forms and satisfactory styling.
### Phase 5: Add favorites and search functionality (2 days/Thurs W9D4)
**Objective:** Primarily, add ability for users to tag articles as a favorite. Secondarily, add search functionality within users collections.
### (Bonus) Phase 6: Finalize CSS and debugging
**Objective:** Add polish to existing CSS where necessary and check site for previously undetected flaws.
### (Bonus) Phase 7: Create chrome extension for detecting current pages RSS url
**Objective:** Create lightweight extension for chrome that easily finds the current webpage's RSS feed. Integrate Inspiral authorization once working.

## Bonus Features
0. Favorites
0. Search functionality
0. Extension to identify local RSS url
