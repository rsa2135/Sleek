import { connect } from 'react-redux';

import MessageForm from './message_form';
import { createMessage } from '../../actions/message_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
