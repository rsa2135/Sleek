## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Chat
  * ChatBar
 - ChannelsSidebar
 - ChannelNavbar

**ChannelsContainer**
 - TeamMenu
 - ChannelListScroller
  * Channels
    + ChannelHeader
    + ChannelList
      1. ChannelHolder
  * DirectMessages

**NavbarContainer**
 - ChannelInfoWrapper
  + ChannelInfo
    * ChannelNameWrapper
      1. ChannelName
    * ChannelStats
      1. UsersInfo
      2. ChannelDescription
  + ChannelSettings
 - Activity
  + SearchWrapper
    * SearchForm

**MessageContainer**
 - Message
  * MessageConetent
    + Avatar
    + MessageHeader
    + MessageBody
    + MessageReaction (bonus)

**AboutContainer**
 - AboutSidebar
  + Headings
 - Scroller Wrapper
  + Sections Container

## Routes

| Path                  | Component           |
|-----------------------|---------------------|
| "/sign-up"            | "AuthFormContainer" |
| "/sign-in"            | "AuthFormContainer" |
| "/messages"           | "HomeContainer"     |
| "/new-channel"        | "NewChannel"        |
| "/new-direct-message" | "NewChannel"        |
| "/channels"           | "ChannelsContainer" |
