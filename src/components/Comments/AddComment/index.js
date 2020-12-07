import React, { useState, useRef, useEffect } from "react";
import "./AddComment.css";
import { Avatar } from "@material-ui/core";

import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import db from "../../../firebase";

const AddComment = ({ user, focus, postid, comments }) => {
  const [comment, setComment] = useState("");
  console.log(user);

  const InputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newComment = {
      username: user.displayName,
      userpic: user.photoURL,
      text: comment,
    };
    setComment("");
    let commentDoc = db.collection("posts").doc(postid);
    commentDoc.update({
      comments: [...comments, newComment],
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (focus) InputRef?.current?.focus();
  }, [focus]);

  const handleComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className="comment">
      <Avatar className="comment__avatar" src={user.photoURL} />

      <div className="comment__inputIcons">
        <form>
          <input
            ref={InputRef}
            className="comment__input"
            value={comment}
            onChange={handleComment}
            placeholder="Write a comment"
          />
          <button
            style={{ display: "none" }}
            onClick={handleSubmit}
            type="submit"
          >
            Hidden Submit
          </button>
        </form>
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
