import styles from "./Posts.module.css";

import React from "react";

const Post = (props) => {
  const dateTime = new Date(props.data.time);

  return (
    <div className={styles.PostContainer}>
      <div className={styles.PostContent}>{props.data.content}</div>
      <div className={styles.PostInfoContainer}>
        <h4>{props.data.posted_by}</h4>
        <p>
          {dateTime.toDateString()}, {dateTime.toLocaleTimeString("en-US")}
        </p>
      </div>
    </div>
  );
};

export default Post;
