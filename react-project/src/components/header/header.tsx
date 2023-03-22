import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

interface IProps {
  title: string;
  page: React.ReactNode;
}

alert(
  'hello), please note that the componentWillUnmount() method is called before removing the component from the DOM, (saving from input to LocalStorage will occur when switching between the Home and About pages, and not when reloading the page. Thank you for your attention)'
);
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
