import React from "react";

import "../Pages/css/bootstrap.min.css";

export default class ProfilePage extends React.Component {
  userData(data) {
    return (
      <div key={Object.keys(data)}>
        <div className="Body-User-label">{Object.keys(data)} </div>
        <div className="Body-User-value">{Object.values(data)}</div>
      </div>
    );
  }
  render() {
    const user = this.props.userData;

    return (
      <div>
        <div className="Body-Profile" />
        <div className="Profile-photo">{user[0].name[0]}</div>
        <div className="container card bg-light align-content-lg-center">
          <div>{user.map(data => this.userData(data))}</div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
