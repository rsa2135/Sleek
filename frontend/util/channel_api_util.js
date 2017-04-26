export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/channels'
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};

export const createChannel = (channel) => {
  debugger
  if (Array.isArray(channel)) {
    channel = {dms: channel};
  } else {
    channel = {channel: channel};
  }
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/channels/',
    data: channel
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
