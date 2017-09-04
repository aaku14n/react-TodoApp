import React from "react";
import userData from "../store/Store.js";
import Header from "../Pages/Header";
import ProfilePage from "../Pages/Profile";
import Footer from "../Pages/Footer";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userData.getAll()
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ProfilePage userData={this.state.user.profile} />
        <Footer />
      </div>
    );
  }
}
