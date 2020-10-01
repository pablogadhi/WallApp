import "./AuthModal.css";

import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { CSSTransition } from "react-transition-group";

const AuthModal = (props) => {
  const [animTrigger, setAnimTrigger] = useState(false);

  useEffect(() => {
    setAnimTrigger(true);
  }, []);

  return (
    <div className="AuthModal">
      <CSSTransition
        in={animTrigger}
        timeout={300}
        classNames="AuthAnimContainer"
        unmountOnExit
        onExited={props.closeModal}
      >
        <div className="AuthFormContainer">
          <button
            className="AuthClosingBtn"
            onClick={() => setAnimTrigger(false)}
          >
            Close
          </button>
          {props.type === "login" ? (
            <LoginForm closeModal={() => setAnimTrigger(false)}></LoginForm>
          ) : null}
        </div>
      </CSSTransition>
    </div>
  );
};

export default AuthModal;
