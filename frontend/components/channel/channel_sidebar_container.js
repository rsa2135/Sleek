import { connect } from 'react-redux';

import ChannelSidebar from './channel_sidebar';
import { logout } from '../../actions/session_actions';
import { fetchUserSubscriptions } from '../../actions/subscription_actions';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';
import { selectAllSubscriptions } from '../../selectors/subscription_selector';
import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllUsers } from '../../selectors/user_selector';


const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    subscriptions: selectAllSubscriptions(state),
    channels: selectAllChannels(state),
    users: selectAllUsers(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUserSubscriptions: (user_id) => dispatch(fetchUserSubscriptions(user_id)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSidebar);
