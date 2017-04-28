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
    let dmsClassname;
    if (this.props.channelSection === 'channel') {
      dmsClassname = "dms-selected-container-hidden";
    } else {
      dmsClassname = "dms-selected-container";
    }

    return(
      <div className={dmsClassname}>
        <div className="pseudo-input">
        {this.props.pendingDms.map(dm =>
          <span className="pending-user-container" onClick={this.deselectUser(dm)} key={dm.id}>
            <span className="pending-user">{dm.username}</span>
            <span className="pending-user-picture">{dm.image_url}</span>
            <i >x</i>
          </span>)
        }
        </div>
        <div onClick={this.startDm} className="create-dm">Go</div>
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
