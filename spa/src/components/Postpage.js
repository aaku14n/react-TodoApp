import React from "react";
// import userData from "../store/Store.js";
import "../Pages/css/Home.css";
import Header from "../Pages/Header";
import PostPage from "../Pages/PostPage";
import Footer from "../Pages/Footer";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.post = this.props.match.params;
  }

  render() {
    return (
      <div>
        <Header />
        <PostPage userPost={this.post} />
        <Footer />
      </div>
    );
  }
}
