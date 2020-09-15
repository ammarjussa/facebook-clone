import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

//REM Naming Comvention

function App() {
  return (
    <div className="App">
      <Header />
      {/* APP BODY */}
      <div className="app__body">
        <Sidebar />
        {/* feed */}
        {/* widget */}
      </div>
    </div>
  );
}

export default App;
