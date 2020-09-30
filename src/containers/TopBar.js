import "./TopBar.css";

import React from "react";

const TopBar = (props) => {
  return (
    <div className="TopBar">
      <button className="AuthButton" onClick={props.showLogin}>
        Login
      </button>
      <button className="AuthButton">SignUp</button>
    </div>
  );
};

export default TopBar;
