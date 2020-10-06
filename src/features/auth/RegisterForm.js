import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, selectAuth, statusReset } from "./authSlice";
import Form from "../../components/form/Form";

/**
 * Form used to sign up.
 * @param {function} props.closeModal Function that closes the auth modal
 */
const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  /**
   * Returns a new function that cleans the signupStatus and
   * sets the local state with the setter passed to it.
   * @param {function} setter A function that sets a state
   */
  const setterAndClean = (setter) => (newValue) => {
    dispatch(statusReset());
    setter(newValue);
  };

  const formItems = [
    { label: "Email:", type: "email", stateSetter: setterAndClean(setEmail) },
    {
      label: "Username:",
      type: "text",
      stateSetter: setterAndClean(setUsername),
    },
    {
      label: "Password:",
      type: "password",
      stateSetter: setterAndClean(setPassword),
    },
    {
      label: "Confirm password:",
      type: "password",
      stateSetter: setConfirmPassword,
    },
  ];

  const close = () => {
    dispatch(statusReset());
    props.closeModal();
  };

  const evalError = () => {
    if (password !== confirmPassword) {
      return "Passwords don't match";
    } else if (authInfo.signupStatus === "failed") {
      return authInfo.signupError;
    }
    return "";
  };

  return (
    <div>
      <Form
        items={formItems}
        submitText="Sign up"
        submit={() =>
          dispatch(registerUser({ data: { email, username, password } }))
        }
        errorMsg={evalError()}
        loading={authInfo.signupStatus === "creating"}
      ></Form>
      {authInfo.signupStatus === "succeeded" && close()}
    </div>
  );
};

export default RegisterForm;
