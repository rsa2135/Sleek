export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};
