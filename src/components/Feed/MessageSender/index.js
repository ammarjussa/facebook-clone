import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //some db stuff
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="What's on your mind?"
          ></input>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          ></input>

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>

        <div className="messageSender__options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>

        <div className="messageSender__options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
