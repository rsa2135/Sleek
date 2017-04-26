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

export const subscribe = (channel_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/subscriptions',
    data: {channel_id}
  });
};

export const unsubscribe = (subscription_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${subscription_id}`
  });
};
