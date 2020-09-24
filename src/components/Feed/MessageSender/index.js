import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../../Provider/StateProvider";
import db from "../../../firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user
        ? user.photoURL
        : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3",
      username: user ? user.displayName : "Firebase User",
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar
          src={
            user
              ? user.photoURL
              : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
          }
        />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${
              user ? user.displayName.split(" ")[0] : "Firebase"
            }?`}
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
