import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";

import { Button } from "@material-ui/core";

import { useStateValue } from "../../Provider/StateProvider";
import { actionTypes } from "../../Provider/reducer";

import GoogleIcon from "../../asset/google-icon.svg";
import { Link } from "react-router-dom";

function Login({ history }) {
  const [state, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        history.push("/");
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
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          className="login__input"
          type="password"
          value={password}
          placeholder="Password"
          name="psw"
          onChange={handlePasswordChange}
          required
        />
        <Button type="submit" onClick={signIn}>
          Log In
        </Button>
        <div className="login__link">
          <Link to="/signup">New User? Click to Sign Up</Link>
        </div>

        <div className="login__google">
          <p>Sign in with Google?</p>
          <img
            onClick={signInWithGoogle}
            height="30px"
            weight="30px"
            src={GoogleIcon}
            alt="Google Icon"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
