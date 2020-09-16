import React from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            placeholder="What's on your mind"
          ></input>
          <input placeholder="Image URL (Optional)"></input>

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__options">
            <VideocamIcon style={{color: 'red'}}/>
            <h3>Live Video</h3>
        </div>

        <div className="messageSender__options">
            <PhotoLibraryIcon style={{color: 'green'}}/>
            <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__options">
            <InsertEmoticonIcon style={{color: 'orange'}}/>
            <h3>Feeling/Activity</h3>
        </div>

      </div>
    </div>
  );
}

export default MessageSender;
