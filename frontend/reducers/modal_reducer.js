import merge from 'lodash/merge';

import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';


const _defaultState = {
  content: null,
  visible: false
};

const ModalReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case CLOSE_MODAL:
      return _defaultState;

    case OPEN_MODAL:
    // debugger
      return {content: action.content, visible: true};

    default:
      return oldState;
  }
};

export default ModalReducer;
