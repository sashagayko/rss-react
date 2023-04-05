import SearchInput from '../components/searchInput/searchInput';
import React from 'react';
import ProductList from '../components/ProductsList/ProductsList';

export function Home() {
  return (
    <div>
      <SearchInput />
      <h1>Home</h1>
      <ProductList />
    </div>
  );
}

export default Home;
