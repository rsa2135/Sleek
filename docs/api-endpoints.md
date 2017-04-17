# API Endpoints

## HTML API

### Root
- `GET /` - loads web app

## JSON API

### Users
- `GET /api/users` - retrieve all users
- `POST /api/users` - create all users
- `PATCH /api/users/:id` - update a user
- `DELETE /api/users/:id` - delete a user

### Session
- `POST /api/users` - create a new session (login)
- `DELETE /api/users` - delete a session (logout)

### Channels
- `GET /api/channels` - retrieve all channels
- `POST /api/channels` - create a channel
- `GET /api/channels/:id` - retrieve a specific channel
- `PATCH /api/channels/:id` - update a channel
- `DELETE /api/channels/:id` - delete a channel

### Messages
- `POST /api/messages` - create a message
- `PATCH /api/messages/:id` - update a message
- `DELETE /api/messages/:id` - delete a message
- `GET /api/messages` - retrieve all messages
- `POST /api/:user_id/messages` - retrieve all messages for a specific user
- `GET /api/messages/channel_id/messages` - retrieve all messages for a specific channel

# Subscriptions
- `GET /api/users/:user_id/subscriptions`
- `GET /api/users/:channel_id/subscriptions`
