import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import { auth } from "../../firebase";

import "./Home.css";

// import Widgets from "./Widgets";

// import { useStateValue } from "../../Provider/StateProvider";

function Home({ history }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(function (person) {
      if (person) {
        setUser(person);
      } else {
        history.push("/login");
      }
    });

    console.log(user);
  });

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
