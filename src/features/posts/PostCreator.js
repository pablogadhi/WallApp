import styles from "./Posts.module.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../auth/authSlice";
import { createPost } from "./postsSlice";

const PostCreator = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const authInfo = useSelector(selectAuth);

  return (
    <div className={styles.PostCreator}>
      <fieldset
        disabled={authInfo.token === ""}
        className={styles.PostFormFieldset}
      >
        <form className={styles.PostForm}>
          <textarea
            className={styles.PostInput}
            placeholder={
              authInfo.token === ""
                ? "You must sign in to be able to post messages!"
                : "Write a message..."
            }
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className={styles.SubmitPostBtn}
            type="button"
            onClick={() =>
              dispatch(
                createPost({
                  data: { content: message },
                  headers: { Authorization: `Token ${authInfo.token}` },
                })
              )
            }
          >
            Post
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default PostCreator;
