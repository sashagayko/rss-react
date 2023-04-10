import Articles from '../components/Articles/Articles';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { Article, ResponseArticle } from '../types';
import { AxiosResponse } from 'axios';

export function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('searchInput') || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('searchInput', inputValue);
  });

  const save = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target!.value;
    setInputValue(target);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<ResponseArticle> = await fetchData(inputValue);
      setArticles(response.data.articles);
      console.log(response.data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  handleSubmit;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => save(e)} value={inputValue} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Submit'}
        </button>
        {isLoading && <img className="loading-icon" src="../../src/assets/loading.png"></img>}
      </form>
      <h1>Home</h1>
      <Articles articles={articles} />
    </div>
  );
}

export default Home;
