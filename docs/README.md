# Sleek

[Sleek live][link-to-sleek]

[link-to-sleek]: http://www.sleek-messaging.com

## Minimum Viable Product

 - [ ] Hosting on Heroku
 - [ ] New account creation, login, and guest/demo login
 - [ ] Live chat
 - [ ] Channels
 - [ ] Direct Message
 - [ ] Teams or multi-person DM
 - [ ] Production README


## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md


## Design Docs

### Phase 1: Backend setup and Front End User Authentication (2 day)

  + **Day 1 Objective:** Backend setup (users table, model, API endpoints). Frontend redux cycle

  + **Day 2 Objective:** Frontend auth components for signup and login pages. CSS styling

### Phase 2: Live Chat Model, API, and components (2 days)

 + **Day 1 Objective:** Static backend setup (messages table, model, API endpoints), Frontend setup (redux + components)

 + **Day 2 Objective:** Finish components, CSS styling, fixing state/database. Convert static backend to live chat. Messages can be created and edited. Messages will be dispersed immediately to every participant of the channel.

### Phase 3: Channels (3 days)

 + **Day 1 Objective:** Backend setup (channels table, subscription table, models, API endpoints). Frontend Setup (redux + components)

 + **Day 2 Objective:** Finish main components (channels and DM's), CSS styling

 + **Day 3 Objective:** Add all channels and all users components, CSS Styling. Channels can be created, edited and destroyed through the API. Users can join channels, create direct messages, and view all channels / all users

### Phase 4: Navbar and Sidebar (2.5 day)

 + **Day 1 Objective:** Finish / fix any database + state issues. Frontend Setup (redux + components)

 + **Day 2 Objective:** Finish components, CSS styling

 + **Day 3 (0.5 day) Objective:** Final touches

### Bonus Features (TBD)
- [ ] Search Messages
- [ ] Notifications
- [ ] Threads
- [ ] Photo and gif support
- [ ] Emoji support
