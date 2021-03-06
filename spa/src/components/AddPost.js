import React from "react";
import "../Pages/css/bootstrap.min.css";
export default class AddPost extends React.Component {
  submitPost() {
    document.getElementById("loader").style.display = "block";

    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementsByClassName("Body-User-Post-Name")[0].value = "";
      document.getElementsByClassName("Body-User-Post-Post")[0].value = "";
    }, 3000);
    let name = document.getElementsByClassName("Body-User-Post-Name")[0].value;
    let post = document.getElementsByClassName("Body-User-Post-Post")[0].value;
    if (name === "" || post === "") return true;
    let data = {};
    data.name = name;
    data.post = post;
    this.props.addPost(data);
  }
  render() {
    return (
      <div>
        <div id="loader">
          <div id="shadow" />
          <div id="box" />
          <br />
          <br />
          <br />
          <b>Waiting...</b>
        </div>
        <input type="text" className="Body-User-Post-Name" placeholder="Name" />
        <br />
        <textarea className="Body-User-Post-Post" placeholder="Comment" />
        <br />
        <button className="btn btn-light" onClick={e => this.submitPost()}>
          Post
        </button>
      </div>
    );
  }
}
