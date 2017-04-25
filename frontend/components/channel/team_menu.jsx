import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router';

class TeamMenu extends React.Component {
  constructor(props) {
    super(props);

    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  logoutAndRedirect(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => this.props.router.push('/login'));
  }

  renderMenu() {
    return (
      <div className="team_menu">
        <div className="title-signout">
          <span className="sleek-title">Sleek</span>

          <button onClick={this.logoutAndRedirect} className="signout">
            <FontAwesome name='sign-out' />
          </button>
        </div>

        <div className="current-user">
          <span className="current-user-status">
            <FontAwesome name='circle' />
          </span>

          <span>
            {this.props.currentUser.username}
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.props.currentUser ? this.renderMenu() : null
    );
  }
}



export default withRouter(TeamMenu);
