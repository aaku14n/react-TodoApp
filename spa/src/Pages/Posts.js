import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import AddPost from "../components/AddPost";
export default class userPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: this.props.userPosts
    };
  }

  userPost(post) {
    return (
      <Link to={"profile/" + post.id} className="Home-Link" key={post.id}>
        <div className="Body-User-Post-Card">
          <div className="Body-User-Post-Label">
            {post.name}
          </div>
          <div className="Body-User-Post-Value">
            {post.post}
          </div>
        </div>
      </Link>
    );
  }
  render() {
    return (
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Post</h4>
            <AddPost addPost={post => this.props.addPost(post)} />
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Post</h4>
            {this.props.userPosts.map(post => this.userPost(post))}
          </div>
        </div>
      </div>
    );
  }
}

// console.log(Object.keys(data)[0])
