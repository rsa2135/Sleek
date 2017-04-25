export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    visible: false
  };
};

export const openModal = (content) => {
  return {
    type: OPEN_MODAL,
    content
  };
};
