import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modal_actions';


const Modal = (props) => {
  debugger
  let clsName;
  if (props.visible) {
    if ((props.content) && (props.content.props.name === "ChannelActionsModal")) {
      clsName = "drop-down-screen";
    } else {
      clsName = "modal-screen";
    }
  } else {
    clsName = 'hidden';
  }
  return (
    <div className={clsName} >
      { props.content }
      <div className="close-modal" onClick={ props.closeModal }>
        <i>X</i>
        <span>close</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.modal.content,
    visible: state.modal.visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
