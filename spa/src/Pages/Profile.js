import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
export default class ProfilePage extends React.Component {
  userData(data) {
    return (
      <div key={Object.keys(data)}>
        <div className="Body-User-label">
          {Object.keys(data)}
        </div>
        <div className="Body-User-value">
          {Object.values(data)}
        </div>
      </div>
    );
  }
  render() {
    const user = this.props.userData;
    console.log(user);
    return (
      <div>
        <div className="Body-Profile" />
        <div className="Profile-photo">
          {user[0].name[0]}
        </div>
        <div className="Body-Profile-Panel">
          {user.map(data => this.userData(data))}
        </div>
        <br />
        <br />
      </div>
    );
  }
}
