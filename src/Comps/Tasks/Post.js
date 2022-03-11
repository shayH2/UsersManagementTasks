import { useEffect } from "react";
import { React, useState } from "react";

const PostComp = (props) => {
  const userPost = () => {};

  return (
    <div>
      <h3>Post comp</h3>
      <span>
        Title: {props.userPost.title} <br />
      </span>
      Completed :
      <input type="text" value={props.userPost.body} /> <br />
      
    </div>
  );
};

export default PostComp;
