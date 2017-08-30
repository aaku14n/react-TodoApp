import React from "react";
import "./css/Home.css";

export default class ProfileEditPage extends React.Component {
  userInfo(data) {
    return (
      <div className="Body-User-Info-Item" key={Object.keys(data)}>
        <div className="Body-User-label">
          {Object.keys(data)}
        </div>
        <div className="Body-User-value">
          <input
            type="text"
            id={Object.keys(data)}
            className="User-Edit-Input"
            placeholder={Object.values(data)}
          />
        </div>
      </div>
    );
  }
  userPostEdit() {
    let userData = {};
    userData.name = document.getElementById("name").value;
    userData.profile = document.getElementById("profile").value;
    userData.status = document.getElementById("status").value;
    userData.address = document.getElementById("address").value;
    this.props.userEdit(userData);
  }
  render() {
    return (
      <div className="Body-User-Info">
        {this.props.userData.map(data => this.userInfo(data))}
        <button onClick={() => this.userPostEdit()}>Save</button>
      </div>
    );
  }
}
