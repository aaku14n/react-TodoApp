import React from "react";
import "./css/Home.css";
import "../Pages/css/bootstrap.min.css";
export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.userData;
  }
  userInfo(data) {
    return (
      <div className="list-group-item" key={Object.keys(data)}>
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
    return (
      <div className="col">
        <div className="fixed">
          <div className="card-header">User Info</div>
          <div className="card-body">
            {this.userData.profile.map(data => this.userInfo(data))}
          </div>
        </div>
      </div>
    );
  }
}
