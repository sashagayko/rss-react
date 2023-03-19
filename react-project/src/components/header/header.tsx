import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="nav-link">
          GO HOME
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </header>
    );
  }
}

export default Header;
