import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Expand from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          className="header_icon"
          alt="logo"
        />
      </a>

      <div className="header_center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon
          style={{
            backgroundColor: "#fe7b80",
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: 10,
            marginRight: -18,
          }}
        />
      </div>

      <div className="header_right" id="noneid">
        <h5 style={{ marginRight: 12 }}>Become a host</h5>
        <LanguageIcon style={{ marginRight: 12 }} />
        <Expand style={{ marginRight: 12 }} />
        <Avatar style={{ marginRight: 12 }} />
      </div>
    </div>
  );
}

export default Header;
