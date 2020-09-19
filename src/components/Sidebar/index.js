import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "../../Provider/StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
      <SidebarRow Icon={PeopleIcon} title="friends" />
      <SidebarRow Icon={ChatIcon} title="messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
