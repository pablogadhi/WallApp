import "./PostList.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const postComponents = posts.map((post) => (
    <Post content={post.content}></Post>
  ));
  return <div className="PostList">{postComponents}</div>;
};

export default PostList;
