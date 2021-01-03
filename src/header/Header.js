import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase/firebase";
import "./Header.css";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5d4c323a8620ae5cc5346818/5d8cb2e3e6f0c89071d07703_gmail-logo.png"
        />
      </div>
      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut}>
          {user?.displayName[0]}
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
