import React, { useState } from "react";
import "./SignUp.css";
import { Button } from "@material-ui/core";
import { auth } from "../../firebase";

function SignUp({history}) {
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

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        history.push('/login')
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signup">
      <div className="signup__logo">
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
          className="signup__input"
          type="text"
          placeholder="Full Name"
          name="name"
          required
        />
        <input
          className="signup__input"
          type="text"
          placeholder="Email Address"
          name="uname"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          className="signup__input"
          type="password"
          value={password}
          placeholder="Password"
          name="psw"
          onChange={handlePasswordChange}
          required
        />

        <Button type="submit" onClick={signUp}>
          SignUp
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
