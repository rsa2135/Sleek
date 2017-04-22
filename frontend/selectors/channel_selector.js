export const allChannels = ({channels}) => {
  return Object.keys({channels}).map(id => channels[id]);
};
