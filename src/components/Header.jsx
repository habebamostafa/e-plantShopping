import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  
  return (
    <header className="header">
      <Link to="/" className="logo">
        🌿 Paradise Nursery
      </Link>
      
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Plants
        </Link>
        <Link to="/cart" className="nav-link cart-icon">
          🛒
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;