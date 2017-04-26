import * as SubscriptionApiUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

export const receiveSubscriptions = (subscriptions) => {
  return {
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
  };
};

export const receiveSubscription = (subscription) => {
  return {
    type: RECEIVE_SUBSCRIPTION,
    subscription
  };
};

export const removeSubscription = (subscription) => {
  return {
    type: REMOVE_SUBSCRIPTION,
    subscription
  };
};

export const subscribe = (channel_id) => {
  return (dispatch) => {
    return SubscriptionApiUtil.subscribe(channel_id)
      .then(subscription => dispatch(receiveSubscription(subscription)));
  };
};

export const unsubscribe = (subscription_id) => {
  return (dispatch) => {
    return SubscriptionApiUtil.unsubscribe(subscription_id)
      .then(subscription => dispatch(receiveSubscription(subscription)));
  };
};

export const fetchUserSubscriptions = (user_id) => {
  return (dispatch) => {
    return SubscriptionApiUtil.fetchUserSubscritpions(user_id)
    .then(subscriptions => dispatch(receiveSubscriptions(subscriptions)));
  };
};

export const fetchChannelSubscriptions = (channel_id) => {
  return (dispatch) => {
    return SubscriptionApiUtil.fetchChannelSubscritpions(channel_id)
    .then(subscriptions => dispatch(receiveSubscriptions(subscriptions)));
  };
};
