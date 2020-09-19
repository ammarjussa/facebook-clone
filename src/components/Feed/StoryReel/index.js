import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import { useStateValue } from "../../../Provider/StateProvider";

function StoryReel() {
  const [{ user }] = useStateValue();
  return (
    <div className="storyReel">
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user.displayName}
        profileSrc={user.photoURL}
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user.displayName}
        profileSrc={user.photoURL}
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user.displayName}
        profileSrc={user.photoURL}
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user.displayName}
        profileSrc={user.photoURL}
      />
      <Story
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        title={user.displayName}
        profileSrc={user.photoURL}
      />
    </div>
  );
}

export default StoryReel;
