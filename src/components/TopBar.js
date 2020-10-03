import styles from "./TopBar.module.css";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, stateCleaned } from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";

const TopBar = (props) => {
  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  const authButtons = (
    <div>
      <button className={styles.AuthButton} onClick={props.showLogin}>
        Login
      </button>
      <button className={styles.AuthButton} onClick={props.showSignUp}>
        SignUp
      </button>
    </div>
  );

  const logout = () => {
    dispatch(stateCleaned());
    storage.removeItem("persist:auth");
  };

  const userDisplay = (
    <div className={styles.LoggedMenu}>
      <h4 className={styles.UsernameDisplay}>{authInfo.username}</h4>
      <button className={styles.AuthButton} onClick={logout}>
        Logout
      </button>
    </div>
  );

  return (
    <div className={styles.TopBar}>
      {authInfo.token === "" ? authButtons : userDisplay}
    </div>
  );
};

export default TopBar;
