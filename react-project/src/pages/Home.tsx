import ProductList from '../components/ProductsList/ProductsList';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { Article } from '../types';

export function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('searchInput') || '');

  useEffect(() => {
    localStorage.setItem('searchInput', inputValue);
  });

  const save = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target!.value;
    setInputValue(target);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetchData(inputValue);
      console.log(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => save(e)} value={inputValue} />
        <button type="submit">submit</button>
      </form>
      <h1>Home</h1>
      <ProductList />
    </div>
  );
}

export default Home;
