import "./InputContainer.css";
import React from "react";

export default class InputContainer extends React.Component {
  render() {
    return (
      <div>
        <form className="InputForm">
          <textarea className="PostInput"></textarea>
          <button className="SubmitPostBtn" type="button">
            Post
          </button>
        </form>
      </div>
    );
  }
}
