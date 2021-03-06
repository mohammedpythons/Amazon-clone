import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket ,user }] = useStateValue()
  const history = useHistory();

  const login = () => {
    auth.signOut();
  }
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
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login}  className="header__option">
            <span className="header__option__lineOne">Hello {user?.email}</span>
            <span className="header__option__lineTwo">{user? "SignOut": "signin"}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">prime</span>
          </div>
        </Link>
      </div>
      {/* basket icon  with numbers */}

      <Link to='/checkout' className="header__link">
        <div className="header__option__Basket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/* numbers of items in the basket */}
          <spam className="header__option__lineTwo header__basketCount">{basket?.length}</spam>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
