import styles from "./TopBar.module.css";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, stateCleaned } from "../../features/auth/authSlice";
import storage from "redux-persist/lib/storage";

/**
 * Component used to render the top bar.
 * @param {function} props.showLogin Function that changes the state to show the Login modal
 * @param {function} props.showSignUp Function that changes the state to show the SignUp modal
 */
const TopBar = (props) => {
  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  /**
   * Div used when the user hasn't logged in.
   */
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

  /**
   * Div used when the user is logged in and his token has been stored locally.
   */
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
      <h1 className={styles.Title}>Wall App</h1>
      {authInfo.token === "" ? authButtons : userDisplay}
    </div>
  );
};

export default TopBar;
