import React, { useState } from "react";
import "./AddComment.css";
import { Avatar } from "@material-ui/core";

import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";

const AddComment = ({ user }) => {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className="comment">
      <Avatar className="comment__avatar" src={user.photoURL} />

      <div className="comment__inputIcons">
        <input
          className="comment__input"
          value={comment}
          onChange={handleComment}
          placeholder="Write a comment"
        />

        <div className="comment__iconSection">
          <div className="comment__icons">
            <SentimentSatisfiedOutlinedIcon />
          </div>
          <div className="comment__icons">
            <CameraAltOutlinedIcon />
          </div>
          <div className="comment__icons">
            <GifOutlinedIcon />
          </div>
          <div className="comment__icons--last">
            <SportsEsportsOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
