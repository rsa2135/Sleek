import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';
import ChannelReducer from './channel_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  messages: MessageReducer,
  channels: ChannelReducer,
});

export default RootReducer;
