import React from "react";
import "./css/Home.css";

export default class ProfileEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.userData;
  }
  userInfo(data) {
    return (
      <div className="Body-User-Info-Item" key={Object.keys(data)}>
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
    console.log(this.userData);

    return (
      <div className="Body-User-Info">
        {this.userData.map(data => this.userInfo(data))}
      </div>
    );
  }
}
