import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel({ user }) {
  return (
    <div className="storyReel">
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=vxkDuEpCR_gAX8R7_R6&_nc_ht=scontent.fkhi4-2.fna&oh=69df6cea1799d0fc50ea600f8d94f5f9&oe=5FBA4F52"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=vxkDuEpCR_gAX8R7_R6&_nc_ht=scontent.fkhi4-2.fna&oh=69df6cea1799d0fc50ea600f8d94f5f9&oe=5FBA4F52"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=vxkDuEpCR_gAX8R7_R6&_nc_ht=scontent.fkhi4-2.fna&oh=69df6cea1799d0fc50ea600f8d94f5f9&oe=5FBA4F52"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=vxkDuEpCR_gAX8R7_R6&_nc_ht=scontent.fkhi4-2.fna&oh=69df6cea1799d0fc50ea600f8d94f5f9&oe=5FBA4F52"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=vxkDuEpCR_gAX8R7_R6&_nc_ht=scontent.fkhi4-2.fna&oh=69df6cea1799d0fc50ea600f8d94f5f9&oe=5FBA4F52"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
    </div>
  );
}

export default StoryReel;
