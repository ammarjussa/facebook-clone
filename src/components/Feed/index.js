import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../../firebase";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [user]);

  return (
    <div className="feed">
      <StoryReel user={user} />
      <MessageSender user={user} />

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          likes={post.data.likes}
          user={user}
          comments={post.data.comments}
        />
      ))}
    </div>
  );
}

export default Feed;
