import React from "react";
import "./css/Home.css";
import userData from "../store/Store.js";

export default class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.user = userData.getAll();
    this.postId = this.props.userPost.userId;
  }
  userData(data) {
    return (
      <div key={Object.keys(data)}>
        <div className="Body-User-label">
          {data.name}
        </div>
        <div className="Body-User-value">
          {data.post}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="Body-Profile" />
        <div className="Profile-photo">
          {this.user.post.map(
            data => (this.postId == data.id ? data.name[0] : "")
          )}
        </div>
        <div className="Body-Profile-Panel">
          {this.user.post.map(
            data => (this.postId == data.id ? this.userData(data) : "")
          )}
        </div>
        <br />
        <br />
      </div>
    );
  }
}
