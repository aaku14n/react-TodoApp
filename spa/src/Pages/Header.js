import React from "react";
import { Link } from "react-router-dom";
import "./css/bootstrap.min.css";
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/">
            Welcome SPA
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item ">
                <Link className="nav-link" to="profile">
                  Profile
                </Link>
              </li>
              <li class="nav-item ">
                <Link className="nav-link" to="profileEdit">
                  Edit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
