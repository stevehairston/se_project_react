import React from "react";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, currentLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__test">
        <div className="header__logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="wtwr logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {currentLocation}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <Link to="/profile">Terrence Tegegne</Link>
        <div>
          <img src="/images/avatar.svg" alt="avatar logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
