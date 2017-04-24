import { connect } from 'react-redux';

import MessageIndex from './message_index';
import { selectAllMessages } from '../../selectors/message_selector';
import { fetchMessages, deleteMessage, updateMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: selectAllMessages(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    deleteMessage: id => dispatch(deleteMessage(id)),
    updateMessage: message => dispatch(updateMessage(message))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageIndex)
);



// channelId: ownProps.params.channelId
