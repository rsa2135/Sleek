import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modal_actions';


const Modal = (props) => {
  return (
    <div className={props.visible ? 'modal-screen' : 'hidden'} >
      <div className='modal-content'>
        { props.content }
      </div>
      <div className="close-modal" onClick={ props.closeModal }>
        close me
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


// modal actions

// const closeModal = () => {
//   visible: false
// }
//
// const openModal = (content) => {
//   type: ...
//   content
// }


// modal reducer

// const _defaultState = [
//   visible: false,
//   content: null
// ]


// channels_wrapper
//
// render() {
//   // ...
//   <button onClick={this.props.openModal(<AllUsersListModalThingWhatever />)}>
//     Direct Messages
//   </button>
//   // ...
// }
//
// mapDispatchToProps ...
//   openModal: (content) => dispatch(openModal(content))




// .hidden {
//   display: none
// }
