import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import { auth } from "../../firebase";
import { Button } from "@material-ui/core";

function Sidebar({ user }) {
  const signOut = (e) => {
    e.preventDefault();
    auth.signOut().then(
      function () {
        console.log("Signed Out");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
  };

  return (
    <div className="sidebar">
      <SidebarRow
        src={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
        title={user ? user.displayName : "Firebase User"}
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
      <SidebarRow Icon={PeopleIcon} title="friends" />
      <SidebarRow Icon={ChatIcon} title="messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More" />
      <Button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={signOut}
      >
        Log Out
      </Button>
    </div>
  );
}

export default Sidebar;
