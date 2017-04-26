import merge from 'lodash/merge';

import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actions/subscription_actions';


const _defaultState = {};

const SubscriptionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      return action.subscriptions;

    case RECEIVE_SUBSCRIPTION:
      return merge({}, oldState, {[action.subscription.id]: action.subscription});

    case REMOVE_SUBSCRIPTION:
      let newState = merge({}, oldState);
      delete newState[action.subscription.id];
      return newState;

    default:
      return oldState;
  }
};

export default SubscriptionReducer;
