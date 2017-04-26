import React from 'react';
import { connect } from 'react-redux';
import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllUsers } from '../../selectors/user_selector';
import { removePendingUser } from '../../actions/pending_dms_actions';
import { receiveUser } from '../../actions/user_actions';

class DmsSelected extends React.Component {
  constructor(props) {
    super(props);
    this.deselectUser = this.deselectUser.bind(this);
  }

  deselectUser(user) {
    return e => {
      console.log(this || "FUCK")
      e.preventDefault();
      this.props.removePendingUser(user);
      debugger
      this.props.receiveUser(user);
    };
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DmsSelected);

// onClick={this.props.updateState(dm)}
