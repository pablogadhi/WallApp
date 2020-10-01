import "./TopBar.css";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, stateCleaned } from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";

const TopBar = (props) => {
  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  const authButtons = (
    <div>
      <button className="AuthButton" onClick={props.showLogin}>
        Login
      </button>
      <button className="AuthButton">SignUp</button>
    </div>
  );

  const logout = () => {
    dispatch(stateCleaned());
    storage.removeItem("persist:auth");
  };

  const userDisplay = (
    <div className="LoggedMenu">
      <h4 className="UsernameDisplay">{authInfo.username}</h4>
      <button className="AuthButton" onClick={logout}>
        Logout
      </button>
    </div>
  );

  return (
    <div className="TopBar">
      {authInfo.token === "" ? authButtons : userDisplay}
    </div>
  );
};

export default TopBar;
