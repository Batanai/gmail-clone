import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth, provider } from "../firebase/firebase";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          alt=""
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
