import merge from 'lodash/merge';

import { RECEIVE_SUBSCRIPTIONS } from '../actions/subscription_actions';


const _defaultState = {};

const SubscriptionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      return action.subscriptions;
    default:
      return oldState;
  }
};

export default SubscriptionReducer;
