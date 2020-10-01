import "./Post.css";

import React from "react";

const Post = (props) => {
  const dateTime = new Date(props.time);

  return (
    <div className="PostContainer">
      <p className="PostContent">{props.content}</p>
      <p className="PostDate">
        {dateTime.toDateString()}, {dateTime.toLocaleTimeString("en-US")}
      </p>
    </div>
  );
};

export default Post;
