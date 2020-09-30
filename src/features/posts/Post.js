import "./Post.css";

import React from "react";

const Post = (props) => {
  return (
    <div className="PostContainer">
      <p>{props.content}</p>
    </div>
  );
};

export default Post;
