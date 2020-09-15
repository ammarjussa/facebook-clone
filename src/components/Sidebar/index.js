import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=XZ8OMrGV7NEAX9tkPPJ&_nc_ht=scontent.fkhi4-2.fna&oh=266c519de6b3515c2d40448a364226bc&oe=5F86E4D2"
        title="Ammar Anwar"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
      <SidebarRow Icon={PeopleIcon} title="friends" />
      <SidebarRow Icon={ChatIcon} title="messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More"/>
    </div>
  );
}

export default Sidebar;
