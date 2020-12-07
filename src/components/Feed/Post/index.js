import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";

import db from "../../../firebase";
import AddComment from "../../Comments/AddComment";
import SingleComment from "../../Comments/SingleComment";
import Comments from "../../Comments/dummyComments.json";

/* Single Comment UI */
/* Edit/Delete Post functionality */
/* Storing comment in database */
/* Edit/Delete comment functionality */
/* Liking the comment. */

function Post({
  profilePic,
  image,
  username,
  timestamp,
  message,
  id,
  likes,
  user,
  comments,
}) {
  const [color, setColor] = useState("gray");

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (likes.includes(user.uid)) {
      setColor("#2e81f4");
    } else {
      setColor("gray");
    }
  }, [likes, user]);

  const updateLike = (e) => {
    e.preventDefault();
    let likeDoc = db.collection("posts").doc(id);
    if (likes.includes(user.uid)) {
      setColor("gray");
      likeDoc.update({
        likes: likes.filter((like) => like !== user.uid),
      });
    } else {
      setColor("#2e81f4");
      likeDoc.update({
        likes: [...likes, user.uid],
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
        <div className="post__op" onClick={updateLike} style={{ color: color }}>
          <ThumbUpIcon />
          <p>{likes.length} Likes</p>
        </div>
        <div className="post__op" onClick={() => setFocus(true)}>
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__op">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>
      <div>
        {comments.map((comment) => (
          <SingleComment
            key={comment.id}
            username={comment.username}
            userpic={comment.userpic}
            text={comment.text}
          />
        ))}
      </div>
      <AddComment user={user} comments={comments} postid={id} focus={focus} />
    </div>
  );
}

export default Post;
