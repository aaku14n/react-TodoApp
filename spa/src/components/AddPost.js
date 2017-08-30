import React from "react";

export default class AddPost extends React.Component {
  submitPost() {
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
        <input type="text" className="Body-User-Post-Name" placeholder="Name" />
        <br />
        <textarea className="Body-User-Post-Post" placeholder="Comment" />
        <br />
        <button onClick={e => this.submitPost()}>Post</button>
      </div>
    );
  }
}
