import React, { useState } from "react";
import "./SingleComment.css";

import { Avatar } from "@material-ui/core";

const SingleComment = ({ username, userpic, text }) => {
  return (
    <div className="scomment">
      <Avatar className="scomment__savatar" src={userpic} />

      <div className="scomment__something">
        <div className="scomment__div">
          <h5>{username}</h5>
          <p>{text}</p>
        </div>

        <div className="scomment__options3">
          <p className="scomment__options3--links">Like</p>
          <p className="scomment__options3--links">Reply</p>
          <p>3m</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
