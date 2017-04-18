```js
// Setting up slack for current user (logged in)
{
  currentUser: {
    id: 1,
    username: "Valentino Rossi"
    email: "Valentino@Rossi.com",
    image_url:
    current_channel: {
      id: 1
    },
    private: false
  },

  // Ability to display errors in form creation
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createChannels: {errors: ["Channel name can't be blank"]}
  },

  // Channels associated with current user
  subscriptions: {
    1: {
      id: 1,
      name: "MotoGP",
      description: "All things MotoGP",
    }
  },

  // Messages in current channel
  messages: [
    4: {
      id: 4,
      username: "Mika Häkkinen"
      body: "MotoGP Sucks!"
      email: "Mikahäkkinen@gmail.com",
      image_url:
    },

    5: {
      id: 5,
      username: "Casey Stoner"
      body: "Valentino, remember how you almost killed me?"
      email: "Caseystoner@random.com.au",
      image_url:
    }
  ]

  // Fetching all channels and users to be available for
  // channel & DM creation
  channels: {
    1: {
      id: 1,
      name: "MotoGP",
      description: "All things MotoGP!"
    }
    2: {
      id: 2,
      name: "FormulaOne",
      description: "All things F1!"
    }
  },
  users: {
    1: {
      id: 1,
      username: "Valentino Rossi",
      email: "Valentino@Rossi.com",
      image_url:
    }
    2: {
      username: "Kimi Räikkönen",
      email: "Kimräikkönen@gmail.com",
      image_url:
    }
  }
}
```
