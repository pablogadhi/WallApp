import "./InputContainer.css";

import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/auth/authSlice";

const InputContainer = () => {
  const authInfo = useSelector(selectAuth);

  return (
    <div className="InputContainer">
      <fieldset disabled={authInfo.token === ""} className="InputFieldset">
        <form className="InputForm">
          <textarea
            className="PostInput"
            placeholder={
              authInfo.token === ""
                ? "You must sign in to be able to post messages!"
                : "Write a message..."
            }
          ></textarea>
          <button className="SubmitPostBtn" type="button">
            Post
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default InputContainer;
