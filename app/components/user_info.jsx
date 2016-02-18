import React from 'react';

class UserInfo extends React.Component {
  render() {
    const {user, logout, login} = this.props;
    return (
      <div id="userinfo">
        {user? this.renderGreeting(user, logout) : this.renderLogin(login)}
      </div>
    )
  }

  renderGreeting(user, logout) {
    return (
      <p>
        Hello, {user.username}.
        <button id='logout' onClick={logout}>Logout</button>
      </p>
    );
  }

  renderLogin(login) {
    return (
      <p>
        <button id='login' onClick={login}>Login</button>
      </p>
    );
  }
}

export default UserInfo;
