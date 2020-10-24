import React, { useState } from "react";
import "./SingleComment.css";

import { Avatar } from "@material-ui/core";

const SingleComment = ({ user }) => {
  const [comments] = useState(["This is a comment"]);

  return (
    <div>
      {comments.length ? (
        <div className="scomment">
          <Avatar className="scomment__savatar" src={user.photoURL} />

          <div className="scomment__something">
            <div className="scomment__div">
              <h5>{user.displayName}</h5>
              <p>{comments[0]}</p>
            </div>

            <div className="scomment__options3">
              <p className="scomment__options3--links">Like</p>
              <p className="scomment__options3--links">Reply</p>
              <p>3m</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleComment;
