import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import searchIcon from "@mui/icons-material";
function Header() {
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <searchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      {/* basket icon  with numbers */}
    </nav>
  );
}

export default Header;
