import { connect } from 'react-redux';

import MessageIndex from './message_index';
import { selectAllMessages } from '../../selectors/message_selector';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    messages: selectAllMessages(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
