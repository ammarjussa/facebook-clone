import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useStateValue } from "./Provider/StateProvider";
// import Widgets from "./components/Widgets";

//REM Naming Comvention

function App() {

  const [{user}] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* <Widgets/> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
