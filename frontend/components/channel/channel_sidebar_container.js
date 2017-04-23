import { connect } from 'react-redux';

import ChannelSidebar from './channel_sidebar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSidebar);
