# API Endpoints
## HTML API
### Root
  * `GET /` - loads app

## JSON API
### Users
- `POST /api/users`
- `PATCH /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Collections
- `GET /api/latest`
  * returns master collection

- `GET /api/collections/:collectionId`
- `POST /api/collections`
- `PATCH /api/collections/:collectionID`
- `DELETE /api/collection/:collectionID`

### Subscriptions
- `GET /api/subscriptions/:subscriptionURL`
- `POST /api/subscriptions`
- `PATCH /api/subscriptions/:subscriptionURL`
- `DELETE /api/subscriptions/:subscriptionURL`
