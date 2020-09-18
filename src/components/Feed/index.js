import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        image="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/43049815_1874400192649449_8704124977693065216_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_eui2=AeG24Yj2WOKQCpltdM2XniboT3JI02YUtJFPckjTZhS0kQqqSXMdxtjZkQFYnL7CS39SvohLV9hXPjY5aG_kBe2j&_nc_ohc=YjdjvXk868MAX-rwKpd&_nc_ht=scontent.fkhi4-2.fna&oh=40683939070ee7bc640cda398b197cf1&oe=5F86C325"
        message="Working nicely"
        timestamp="time"
        username="Ammar Anwar"
        profilePic="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-9/108185817_3086399644782825_1160420918872344251_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeHhsFG9W_7L_6jQL5LwGPqdBMSzFnwCjnQExLMWfAKOdO6yMPRfT0AoNeYg0_Yz4gaFKwVn9FFmzREZZsU5uLYA&_nc_ohc=XZ8OMrGV7NEAX9tkPPJ&_nc_ht=scontent.fkhi4-2.fna&oh=266c519de6b3515c2d40448a364226bc&oe=5F86E4D2"
      />
      {/* <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
