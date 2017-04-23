export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/channels'
  });
};

// Do I need this?
export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};

export const createChannel = (channel, user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/channels/',
    data: channel, user
  });
};

export const updateChannel = (channel) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: channel
  });
};

export const deleteChannel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${id}`,
  });
};
