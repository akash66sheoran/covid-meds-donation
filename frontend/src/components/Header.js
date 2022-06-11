import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";
function Header() {

  const { cartItems } = useSelector(state => state.cart)

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
            {cartItems ? cartItems.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
