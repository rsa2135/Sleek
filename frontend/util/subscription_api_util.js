export const fetchUserSubscritpions = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/subscriptions`
  });
};

export const fetchChannelSubscritpions = (channel_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channel_id}/subscriptions`
  });
};


// NOTE: to revisit logic of creating and deleteing a subscription
export const createSubscription = () => {
  return $.ajax({
    method: 'POST',
    url: ''
  });
};

export const deleteSubscription = () => {
  return $.ajax({
    method: 'DELETE',
    url: ''
  });
};
