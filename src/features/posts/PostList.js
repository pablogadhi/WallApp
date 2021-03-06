import styles from "./Posts.module.css";

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, selectStatus, fetchPosts } from "./postsSlice";
import Post from "./Post";

/**
 * Component used to render the list of posts.
 */
const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "empty") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [posts]);

  const postComponents = posts.map((post, idx) => (
    <Post data={post} key={idx}></Post>
  ));

  const listContent = () => {
    switch (status) {
      case "succeeded":
        return postComponents;
      case "loading":
        return <h4 className={styles.FetchError}>Loading...</h4>;
      default:
        return <h4 className={styles.FetchError}>Failed to fetch posts...</h4>;
    }
  };

  return (
    <div className={styles.PostList}>
      {listContent()}
      <div ref={endRef}></div>
    </div>
  );
};

export default PostList;
