export const selectAllMessages = ({ messages }) => {
  return Object.keys(messages).map(id => messages[id])
};
