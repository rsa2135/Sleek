export const ADD_PENDING_USER = "ADD_PENDING_USER";
export const REMOVE_PENDING_USER = "REMOVE_PENDING_USER";
export const CLEAR_LIST = "CLEAR_LIST";


export const addPendingUser = (user) => {
  return {
    type: ADD_PENDING_USER,
    user
  };
};

export const removePendingUser = (user) => {
  return {
    type: REMOVE_PENDING_USER,
    user
  };
};

export const clearList = () => {
  return {
    type: CLEAR_LIST,
  };
};
