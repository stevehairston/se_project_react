import React from "react";
import profileAvatar from "../../images/avatar.svg";
import "../SideBar/Sidebar.css";

const SideBar = ({ profileName }) => {
  return (
    <div className="sidebar">
      <div className="sideBar__info">
        <img
          src={profileAvatar}
          className="Profile__image"
          alt="Profile-avatar"
        />
        <p className="profile__name">{profileName}</p>
      </div>
    </div>
  );
};

export default SideBar;
