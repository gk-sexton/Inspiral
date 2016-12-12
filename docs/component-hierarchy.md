# Component Hierarchy

### GateContainer
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
| '/gate' | 'GateContainer' |
| '/home' |  'HomeContainer' |
| '/home/newfeed'| 'NewFeedFormContainer' |
| '/home/collections/:collectionId'  | 'FeedContainer' |
| '/home/subscriptions/:subscriptionURL' | 'FeedContainer' |
