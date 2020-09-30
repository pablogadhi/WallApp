import "./App.css";

import React, { useState } from "react";

import InputContainer from "./containers/InputContainer";
import PostList from "./features/posts/PostList";
import TopBar from "./containers/TopBar";
import AuthModal from "./features/auth/AuthModal";

function App() {
  const [authType, setAuthType] = useState("");

  return (
    <div className="App">
      <TopBar showLogin={() => setAuthType("login")}></TopBar>
      <div className="Content">
        <PostList></PostList>
        <InputContainer></InputContainer>
      </div>
      {authType !== "" ? (
        <AuthModal
          closeModal={() => setAuthType("")}
          type={authType}
        ></AuthModal>
      ) : null}
    </div>
  );
}

export default App;
