import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="Home-header">
        Welcome SPA
        <div className="Home-header-nav">
          <Link className="Home-Link" to="/">
            Home
          </Link>
          <Link className="Home-Link" to="profile">
            Profile
          </Link>
          <Link className="Home-Link" to="Edit">
            Edit
          </Link>
        </div>
      </div>
    );
  }
}
