import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";
function Header() {

  return (
    <div className="navbar navbar-color p-3">
      <Link className="link ms-3 text-white" to="/">
        logo
      </Link>

      <div className="">
        <Link className="link text-white mx-3" to="/request">
          Request
        </Link>
        <Link className="link text-white mx-3" to="/donate">
          Donate
        </Link>
        <Link className="link text-white mx-3" to="/checkout">
          <ShoppingCartIcon />
          <span>
            0
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
