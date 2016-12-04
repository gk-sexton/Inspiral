# Component Hierarchy

### AuthFormContainer
  * Authform

### HomeContainer
  * Home
    * FeedContainer
  * Sidebar
    * NewFeedFormContainer
    * CollectionsContainer

### Home
  * HeaderContainer
    * Header   

### NewFeedFormContainer
  * NewFeedForm

### CollectionsContainer
  * Collections

### Bonus: Search
  * SuggestedTags
    * AutoSearch
    * AutoSearchResults
  * SuggestedSites

    * AutoSearch
    * AutoSearchResults

### Bonus: Favorites
  * FavPostsContainer
    * FavPosts

### Routes

| Path | Component |
|------|-----------|
| '/sign-up' | 'AuthFormContainer' |
| '/sign-in' | 'AuthFormContainer' |
| '/home' |  'HomeContainer' |
| '/home/newfeed'| 'NewFeedFormContainer' |
| '/home/collection/:collectionId'  | 'FeedContainer' |
| '/home/subscription/:subscriptionURL' | 'FeedContainer' |
