import styles from "./Posts.module.css";

import React from "react";

/**
 *
 * Component used to render a Post with its content, date, and the username of the user who posted it.
 * @param {object} props.data The data object returned by the API with the structure {content: string, time: string, posted_by: string}
 */
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
