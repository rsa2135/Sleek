import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';
import ChannelReducer from './channel_reducer';
import CurrentChannelReducer from './current_channel_reducer';
import SubscriptionReducer from './subscription_reducer';
import UserReducer from './user_reducer';
import ModalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  messages: MessageReducer,
  channels: ChannelReducer,
  subscriptions: SubscriptionReducer,
  users: UserReducer,
  modal: ModalReducer
});

export default RootReducer;
