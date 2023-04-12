import React from 'react';
import products from '../../products.json';
import ProductItem from '../Articles/Articles';
import './productList.css';

export function ProductList() {
  return (
    <h2 className="list-products">
      <ul className="list-products__content">
        {products.map((el) => (
          <ProductItem post={el} key={el.id} />
        ))}
      </ul>
    </h2>
  );
}

export default ProductList;
