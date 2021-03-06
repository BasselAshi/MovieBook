import React from "react";
import SearchBar from "./search-bar";
import { MenuTab } from "./menu-tab";
import { Avatar, message } from "antd";
import LogoutButton from './logout-button';
import {Spin} from "antd";

import "./styles.css";

export default function AuthenticatedNavBar(
    {
      userName,
      profileImagePath,
      isAdmin,
}) {

  // if userName and profileImagePath are not passed, set default values
  const passedUserName = userName ? userName : <Spin/>;
  const passedProfileImagePath = profileImagePath ? profileImagePath : <Spin/>;

  return (
    <div className="flex-box">
      <div className="header-menu">
        <MenuTab path="/">Home</MenuTab>
        <MenuTab path="/movies">Movies</MenuTab>
        <MenuTab path="/feed">Feed</MenuTab>
        {isAdmin && <MenuTab path="/admin">Admin</MenuTab>}
      </div>
      <div className="authed-search-box">
        <div>
          <SearchBar />
        </div>
        <div className="user-info-box">
          <div className="defaultText usernameText">{passedUserName}</div>
          <a href="/profile" className="user-photo-box">
            <Avatar
              src={passedProfileImagePath}
              alt={passedUserName}
              size={55}
            />
          </a>
          <div className="logoutButtonPosition">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
