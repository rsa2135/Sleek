import * as SubscriptionApiUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";

export const receiveSubscriptions = (subscriptions) => {
  return {
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
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
