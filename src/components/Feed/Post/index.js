import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import db from "../../../firebase";
import firebase from "firebase";

function Post({ profilePic, image, username, timestamp, message, id, likes }) {
  const [like, setLike] = useState(false);

  const updateLike = (e) => {
    e.preventDefault();
    let likeDoc = db.collection("posts").doc(id);
    if (like) {
      setLike(false);
      likeDoc.update({
        likes: firebase.firestore.FieldValue.increment(-1),
      });
    } else {
      setLike(true);
      likeDoc.update({
        likes: firebase.firestore.FieldValue.increment(1),
      });
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__op" onClick={updateLike}>
          <ThumbUpIcon />
          <p>{likes} Likes</p>
        </div>
        <div className="post__op">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__op">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__op">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
