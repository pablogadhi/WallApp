import "./App.css";

import React, { useState } from "react";

import TopBar from "./components/topBar/TopBar";
import PostList from "./features/posts/PostList";
import PostCreator from "./features/posts/PostCreator";
import AuthModal from "./features/auth/AuthModal";

/**
 * The app's main container.
 */
function App() {
  const [authType, setAuthType] = useState("");

  return (
    <div className="App">
      <TopBar
        showLogin={() => setAuthType("login")}
        showSignUp={() => setAuthType("signup")}
      ></TopBar>
      <div className="Content">
        <PostList></PostList>
      </div>
      <PostCreator></PostCreator>
      {authType !== "" && (
        <AuthModal
          closeModal={() => setAuthType("")}
          type={authType}
        ></AuthModal>
      )}
    </div>
  );
}

export default App;
