// src/components/Header.js
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import "../App.css";
import Logo from "../components/logo.png";

function Header(props) {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <IconButton>
        <img className="header__logo" alt="Logo" src={Logo} />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;