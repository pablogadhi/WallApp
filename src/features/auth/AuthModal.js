import styles from "./Auth.module.css";

import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { CSSTransition } from "react-transition-group";

/**
 * The modal component used to handle both authentication forms.
 * @param {function} props.closeModal Function that changes the state to close the modal
 * @param {string} props.type The modal type, it can be either "login" or "signup"
 */
const AuthModal = (props) => {
  const [animTrigger, setAnimTrigger] = useState(false);

  useEffect(() => {
    setAnimTrigger(true);
  }, []);

  return (
    <div className={styles.AuthModal}>
      <CSSTransition
        in={animTrigger}
        timeout={300}
        classNames={{
          enter: styles.AuthAnimContainerEnter,
          enterActive: styles.AuthAnimContainerEnterActive,
          exit: styles.AuthAnimContainerExit,
          exitActive: styles.AuthAnimContainerExitActive,
        }}
        unmountOnExit
        onExited={props.closeModal}
      >
        <div className={styles.AuthFormContainer}>
          <button
            className={styles.AuthClosingBtn}
            onClick={() => setAnimTrigger(false)}
          >
            Close
          </button>
          {props.type === "login" ? (
            <LoginForm closeModal={() => setAnimTrigger(false)}></LoginForm>
          ) : (
            <RegisterForm
              closeModal={() => setAnimTrigger(false)}
            ></RegisterForm>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default AuthModal;
