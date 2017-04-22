import { connect } from 'react-redux';

import MessageIndex from './message_index';
import { selectAllMessages } from '../../selectors/message_selector';
import { fetchMessages, deleteMessage, updateMessage } from '../../actions/message_actions';

const mapStateToProps = (state) => {
  return {
    messages: selectAllMessages(state),
    channel_id: 1
  };
  // NOTE remeber grabbing channel from state
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages()),
    deleteMessage: (id) => dispatch(deleteMessage(id)),
    updateMessage: (message) => dispatch(updateMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
