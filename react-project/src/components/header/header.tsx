import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

interface IProps {
  title: string;
  page: React.ReactNode;
}

alert('hello');
class Header extends React.Component<IProps> {
  render() {
    const title = this.props.title;
    const page = this.props.page;
    return (
      <>
        <header className="header">
          <div className="nav-link">This is {title} page</div>
          <Link to="/" className="nav-link">
            GO HOME
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </header>
        <main>{page}</main>
      </>
    );
  }
}

export default Header;
