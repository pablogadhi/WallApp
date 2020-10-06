import React, { useState } from "react";
import Form from "../../components/form/Form";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, authUser } from "./authSlice";

/**
 * Form used to login.
 * @param {function} props.closeModal Function that closes the auth modal
 */
const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  const formItems = [
    { label: "Username:", type: "text", stateSetter: setUsername },
    { label: "Password:", type: "password", stateSetter: setPassword },
  ];

  return (
    <div>
      <Form
        items={formItems}
        submitText="Login"
        submit={() => dispatch(authUser({ data: { username, password } }))}
        errorMsg={
          authInfo.loginStatus === "failed" ? "Wrong username or password" : ""
        }
        loading={authInfo.loginStatus === "authenticating"}
      ></Form>
      {authInfo.loginStatus === "succeeded" && props.closeModal()}
    </div>
  );
};

export default LoginForm;
