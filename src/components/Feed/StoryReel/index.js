import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel({ user }) {
  return (
    <div className="storyReel">
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user ? user.displayName : "Firebase User"}
        profileSrc={
          user
            ? user.photoURL
            : "https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/p160x160/119741127_104766208049447_1835121773555063927_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeGNDRiAVdxZ6yZ64m0SMEUarFAgzL5B8-esUCDMvkHz54bVZAZdzXaCbw14Qd6l1oaCrGFTcno1a8iHqraUtUQr&_nc_ohc=rkh3nuAOC_EAX9usbr3&_nc_ht=scontent.fkhi4-1.fna&tp=6&oh=45dfefb5eacdff75be1a54e1f82098ef&oe=5F9182D3"
        }
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
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
