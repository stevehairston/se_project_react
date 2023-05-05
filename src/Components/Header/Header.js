import React from "react";
import "./Header.css";

const Header = ({ onCreateModal, currentLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__test">
        <div className="header__logo">
          <img src="/images/logo.svg" alt="wtwr logo" />
        </div>
        <div className="header__date">
          {currentDate}, {currentLocation}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <div className="header__name">Terrence Tegegne</div>
        <div>
          <img src="/images/avatar.svg" alt="avatar logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
