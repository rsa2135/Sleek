export const selectAllSubscriptions = ({ subscriptions }) => {
  return Object.keys(subscriptions).map(id => subscriptions[id])
};
