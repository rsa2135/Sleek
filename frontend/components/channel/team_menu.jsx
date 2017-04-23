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
    this.props.logout(this.props.currentUser)
      .then(() => router.push('/login'));
  }


  render() {
    return (
      <div className="team_menu">
        <div>
          <span>Sleek</span>
        </div>

        <button className="signout">
          <FontAwesome name='sign-out' />
        </button>

        <div>
          <span>
            <FontAwesome name='circle' />
          </span>

          <span>
            {this.props.currentUser.username}
          </span>
        </div>
      </div>
    );
  }
}



export default withRouter(TeamMenu);
