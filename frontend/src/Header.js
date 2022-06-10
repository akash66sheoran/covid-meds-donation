import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";
function Header() {

  const handleAuthentication = () => {

  };


  return (
    <div className="header">
      <Link className="link" to="/">
        logo
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="link" to={"/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Welcome username</span>
            <span className="header__optionLineTwo">
              Sign Out
            </span>
            <span className="header__optionLineTwo">
              Sign In
            </span>
          </div>
        </Link>
        <Link className="link" to="/request">
          <div className="header__option">
            <span className="header__optionLineOne">Request</span>
            <span className="header__optionLineTwo">Medicine</span>
          </div>
        </Link>
        <Link className="link" to="/donate">
          <div className="header__option">
            <span className="header__optionLineOne">Donate</span>
            <span className="header__optionLineTwo">Medicine</span>
          </div>
        </Link>
        <Link className="link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
