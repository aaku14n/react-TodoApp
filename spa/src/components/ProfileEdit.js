import React from "react";
import userData from "../store/Store.js";
import "../Pages/css/Home.css";
import Header from "../Pages/Header";
import ProfileEditPage from "../Pages/ProfileEdit";
import Footer from "../Pages/Footer";

export default class ProfileEdit extends React.Component {
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
        <ProfileEditPage userData={this.state.user.profile} />
        <Footer />
      </div>
    );
  }
}
