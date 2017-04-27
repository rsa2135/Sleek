import React from 'react';
import { connect } from 'react-redux';
import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllUsers } from '../../selectors/user_selector';
import { removePendingUser, clearList } from '../../actions/pending_dms_actions';
import { receiveUser, fetchUsers } from '../../actions/user_actions';
import { createChannel } from '../../actions/channel_actions';
import { fetchUserSubscriptions } from '../../actions/subscription_actions';
import { closeModal } from '../../actions/modal_actions';

class DmsSelected extends React.Component {
  constructor(props) {
    super(props);
    this.deselectUser = this.deselectUser.bind(this);
    this.startDm = this.startDm.bind(this);
  }

  deselectUser(user) {
    return e => {
      e.preventDefault();
      this.props.removePendingUser(user);
      this.props.receiveUser(user);
    };
  }

  startDm() {
    this.props.createChannel(this.props.pendingDms)
      .then(() => this.props.fetchUserSubscriptions(currentUser.id))
      .then(() => this.props.fetchUsers());
    this.props.clearList();
    this.props.closeModal();

  }

  render() {
    return(
      <div className="dms-selected">
        {this.props.pendingDms.map(dm =>
          <div key={dm.id}>
            <span>{dm.username}</span>
            <span>{dm.image_url}</span>
            <i onClick={this.deselectUser(dm)}>x</i>
          </div>)
        }
        <div onClick={this.startDm}>Go</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pendingDms: state.pendingDms,
  channels: selectAllChannels(state),
  users: selectAllUsers(state),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  removePendingUser: user => dispatch(removePendingUser(user)),
  receiveUser: user => dispatch(receiveUser(user)),
  createChannel: channel => dispatch(createChannel(channel)),
  fetchUsers: () => dispatch(fetchUsers()),
  clearList: () => dispatch(clearList()),
  fetchUserSubscriptions: (user_id) => dispatch(fetchUserSubscriptions(user_id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DmsSelected);
