import React from 'react';
import products from '../../products.json';
import ClassProduct from '../product/ProductItem';
import './productList.css';

class ClassProductList extends React.Component {
  render() {
    return (
      <h2 className="list-products">
        <ul className="list-products__content">
          {products.map((el) => (
            <ClassProduct post={el} key={el.id} />
          ))}
        </ul>
      </h2>
    );
  }
}

export default ClassProductList;
