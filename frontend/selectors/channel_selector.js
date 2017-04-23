export const selectAllChannels = ({channels}) => {
  return Object.keys({channels}).map(id => channels[id]);
};
