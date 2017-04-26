import React from 'react';
import { connect } from 'react-redux';
import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllUsers } from '../../selectors/user_selector';
import { removePendingUser, clearList } from '../../actions/pending_dms_actions';
import { receiveUser, fetchUsers } from '../../actions/user_actions';
import { createChannel } from '../../actions/channel_actions';

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
    debugger
    this.props.createChannel(this.props.pendingDms);
    this.props.clearList();
    this.props.fetchUsers();
  }

  render() {
    debugger
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
});

const mapDispatchToProps = (dispatch) => ({
  removePendingUser: user => dispatch(removePendingUser(user)),
  receiveUser: user => dispatch(receiveUser(user)),
  createChannel: channel => dispatch(createChannel(channel)),
  fetchUsers: () => dispatch(fetchUsers()),
  clearList: () => dispatch(clearList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DmsSelected);
