import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/login.css";
import { motion } from "framer-motion";

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(true);
  function handleShowSignUp() {
    setShowSignUp(!showSignUp);
  }
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChangeForSignup(event) {
    const { name, value } = event.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  }
  function handleInputChangeForLogin(event) {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  }
  function handleSubmitForSignup(event) {
    event.preventDefault();
    if (signupFormData.password !== signupFormData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log(signupFormData);
      // add your code to submit the form data to the server here
    }
  }
  function handleSubmitForLogin(event) {
    event.preventDefault();
    console.log(loginFormData);
    // add your code to submit the form data to the server here
  }
  return (
    <motion.div className="content loginpage"
    initial={{x:"-100%"}}
    animate={{x:0,transition:{duration:0.2,delay:0.2}}}
    exit={{y:window.innerHeight,transition:{duration:0.2}}}>
      <div className="registrationcard">
        <div className={showSignUp ? "coverup" : "coverup shiftedleft"}>
          <span>
            {showSignUp ? "Already Registered?" : "Not Registered?"}
            <br />
            {showSignUp ? "Click to Sign In" : "Click to Sign Up"}
          </span>
          <Button variant="contained" onClick={handleShowSignUp}>
            {showSignUp ? "Sign-In" : "Sign-Up"}
          </Button>
        </div>
        <div className="signupform_div">
          <h3>Sign-Up for a new account</h3>
          <form className="signupform" onSubmit={handleSubmitForSignup}>
            <TextField
              className="inputfield"
              variant="outlined"
              label="First Name"
              name="firstName"
              type={"text"}
              onChange={handleInputChangeForSignup}
              value={signupFormData.firstName}
              required
            />
            <TextField
              className="inputfield"
              variant="outlined"
              label="Last Name"
              name="lastName"
              type={"text"}
              onChange={handleInputChangeForSignup}
              value={signupFormData.lastName}
              required
            />
            <TextField
              className="inputfield"
              variant="outlined"
              label="Email"
              name="email"
              type={"email"}
              onChange={handleInputChangeForSignup}
              value={signupFormData.email}
              required
            />
            <TextField
              className="inputfield"
              variant="outlined"
              label="Password"
              name="password"
              inputProps={{ minLength: 8 }}
              type={"password"}
              onChange={handleInputChangeForSignup}
              value={signupFormData.password}
              helperText="Should be atleast 8 characters long."
              required
            />
            <TextField
              className="inputfield"
              variant="outlined"
              label="Confirm Password"
              name="confirmPassword"
              type={"password"}
              onChange={handleInputChangeForSignup}
              value={signupFormData.confirmPassword}
              helperText="Must match the password you entered above"
              required
            />
            <Button className="signup_bttn" type="submit" variant="contained">
              Sign Up
            </Button>
          </form>
        </div>
        <div className="loginform_div">
          <h3>Login to your existing account</h3>
          <form className="loginform" onSubmit={handleSubmitForLogin}>
            <TextField
              className="inputfield"
              variant="outlined"
              label="Enter Email"
              type={"email"}
              name="email"
              onChange={handleInputChangeForLogin}
              value={loginFormData.email}
              required
            />
            <TextField
              className="inputfield"
              variant="outlined"
              label="Enter Password"
              type={"password"}
              name="password"
              onChange={handleInputChangeForLogin}
              value={loginFormData.password}
              required
            />
            <Button className="login_bttn" type="submit" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
