import React from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Feed from "../Feed";
// import Widgets from "./Widgets";

import { useStateValue } from "../../Provider/StateProvider";

function Home() {
  const [{ user }] = useStateValue();

  return (
    <div className="home">
      {!user ? (
        <div>NO USER</div>
      ) : (
        <>
          <Header />
          <div className="home__body">
            <Sidebar />
            <Feed />
            {/* <Widgets/> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
