import { connect } from 'react-redux';

import MessageForm from './message_form';
import { createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router';
import { selectAllSubscriptions } from '../../selectors/subscription_selector';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    channelId: ownProps.params.channelId,
    subscriptions: selectAllSubscriptions(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageForm)
);
