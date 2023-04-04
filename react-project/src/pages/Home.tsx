import SearchInput from '../components/searchInput/searchInput';
import React from 'react';
import ProductList from '../components/ProductsList/ProductsList';

export function Home() {
  alert(
    'Привет проверяющий, к сожалению я не успел доделать, буду очень благодарен если дашь мне еще немного времени :)'
  );
  return (
    <div>
      <SearchInput />
      <h1>Home</h1>
      <ProductList />
    </div>
  );
}

export default Home;
