# Schema Information

## users
| Column Name | Data Type | details |
|-------------|-----------|---------|
| id | integer | not null, primary key |
| username | string | not null, indexed, unique |
| email | string | not null, indexed, unqiue |
| password_digest | string | not null |
| session_token | string | not null, indexed, unqiue |

## collections
| Column Name | Data Type | details |
|-------------|-----------|---------|
| id | integer | not null, primary key |
| title | string | not null, indexed |
| user_id | integer | not null, indexed |
| subscription_id | integer | not null, indexed, unique |

## subscriptions
| Column Name | Data Type | details |
|-------------|-----------|---------|
| id | integer | not null, primary key |
| url | text | not null, indexed|
| collection_id | integer | not null, indexed |

## taggings
| Column Name | Data Type | details |
|-------------|-----------|---------|
| id | integer | not null, primary key |
| collection_id | integer | not null, indexed |
| subscription_id | integer | not null, indexed |
