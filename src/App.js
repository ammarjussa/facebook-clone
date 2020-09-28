import React from "react";
import "./App.css";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//BEM Naming Convention

/* Button should turn blue and text underline when like is pressed. */
/* Upon clicking again, button should return to normal. */
/* Convert like to array of user who liked. Number of user should be shown in like button */
/* Add Comments array similar to like but with field of comment */
/* Advance: Try to implement push notification using firebase and show number on the notification icon as well*/

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
