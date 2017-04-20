import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  messages: MessageReducer
});

export default RootReducer;
