import React from "react";
import userData from "../store/Store.js";
import "../Pages/css/Home.css";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import UserInfo from "../Pages/User";
import UserPosts from "../Pages/Posts";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userData.getAll()
    };
  }
  componentWillMount() {
    userData.on("change", () => {
      this.setState({
        userData: userData.getAll()
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Body">
          <UserInfo userData={this.state.user} />
          <UserPosts
            userPosts={this.state.user.post}
            addPost={post => userData.addPost(post)}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
