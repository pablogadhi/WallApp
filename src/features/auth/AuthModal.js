import "./AuthModal.css";

import React from "react";
import LoginForm from "./LoginForm";
import { useTransition, animated } from "react-spring";

const AuthModal = (props) => {
  const transitions = useTransition([0], (item) => item, {
    from: { top: "-60%" },
    enter: { top: "20%" },
    leave: { top: "-60%" },
  });

  return (
    <div className="AuthModal">
      {transitions.map(({ item, key, styleProps }) => (
        <animated.div
          key={key}
          style={styleProps}
          className="AuthFormContainer"
        >
          {console.log(key)}
          <button className="AuthClosingBtn" onClick={props.closeModal}>
            Close
          </button>
          {props.type === "login" ? <LoginForm></LoginForm> : null}
        </animated.div>
      ))}
    </div>
  );
};

export default AuthModal;
