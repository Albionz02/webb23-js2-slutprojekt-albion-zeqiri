import React from 'react';
import { Link } from 'react-router-dom';  

const Navbar = ({ cartItemCount }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Produkter</Link>
        </li>
        <li>
          <Link to="/cart">Kundvagnen ({cartItemCount})</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
