import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";

import { Button } from "@material-ui/core";

import { useStateValue } from "../../Provider/StateProvider";
import { actionTypes } from "../../Provider/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="Facebook logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook logo"
        />
      </div>

      <form className="login__form" method="post">
        <input
          className="login__input"
          type="text"
          placeholder="Email Address"
          name="uname"
          required
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          name="psw"
          required
        />
        <Button type="submit" onClick={signIn}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
