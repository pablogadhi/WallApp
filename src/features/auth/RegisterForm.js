import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, selectAuth, signupStatusReseted } from "./authSlice";
import Form from "../../components/Form";

const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  const formItems = [
    { label: "Email:", type: "email", stateSetter: setEmail },
    { label: "Username:", type: "text", stateSetter: setUsername },
    { label: "Password:", type: "password", stateSetter: setPassword },
    {
      label: "Confirm password:",
      type: "password",
      stateSetter: setConfirmPassword,
    },
  ];

  const close = () => {
    dispatch(signupStatusReseted());
    props.closeModal();
  };

  return (
    <div>
      <Form
        items={formItems}
        submitText="Sign up"
        submit={() =>
          dispatch(registerUser({ data: { email, username, password } }))
        }
      ></Form>
      {authInfo.signupStatus === "succeeded" && close()}
    </div>
  );
};

export default RegisterForm;
