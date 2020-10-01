import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, authUser } from "./authSlice";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <form className="AuthForm">
      <label className="FormItem">
        User Name:
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label className="FormItem">
        Password:
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button
        type="button"
        className="FormBtn"
        onClick={() => dispatch(authUser({ username, password }))}
      >
        Login
      </button>
      {authInfo.status === "succeeded" ? props.closeModal() : null}
    </form>
  );
};

export default LoginForm;
