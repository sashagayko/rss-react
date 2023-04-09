import React, { FC } from 'react';
import './Articles.css';
import { Article } from '../../types';

export const Articles: FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <ul className="articles__list">
      {articles.map(({ urlToImage, title, description, author }, index: number) => {
        return (
          <li key={index} className="product">
            <img className="product__image" src={urlToImage} alt={title} />
            <div className="product__description">
              <div className="product__title">Title: {title}</div>
              <h5 className="product__price">Author: {author}</h5>
              <div className="product__title">Description: {description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
