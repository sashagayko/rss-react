import SearchInput from '../components/searchInput/searchInput';
import React from 'react';
import ClassProductList from '../components/ProductsList/ProductsList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <h1>Home</h1>
        <ClassProductList />
      </div>
    );
  }
}

export default Home;
