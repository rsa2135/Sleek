export const selectAllChannels = ({channels}) => {
  return Object.keys(channels).map(id => channels[id]);
};

export const selectCurrentChannel = (channelId, channels) => {
  return channels.filter((channel) => (channel.id === channelId))
}
