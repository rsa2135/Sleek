export const selectAllUsers = ({users}) => {
  return Object.keys(users).map(id => users[id]);
};
