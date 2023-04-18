import Articles from '../components/Articles/Articles';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { Article, ResponseArticle } from '../types';
import { AxiosResponse } from 'axios';
import { inputValueSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { saveValue } from '../store/actions';

export function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputValue = useSelector(inputValueSelector);
  const dispatch = useDispatch();
  console.log(inputValue);

  const save = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target!.value.toString();
    dispatch(saveValue(target));
  };

  const getArticles = async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<ResponseArticle> = await fetchData(inputValue);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    getArticles();
  };

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {articles.length ? <Articles articles={articles} /> : <h2>Not found articles</h2>}
    </div>
  );
}

export default Home;
