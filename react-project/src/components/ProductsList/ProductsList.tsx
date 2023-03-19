import React from 'react';
import products from '../../products.json';
import ClassProduct from '../product/ProductItem';
import './productList.css';

class ClassProductList extends React.Component {
  render() {
    return (
      <div className="list-products">
        <div className="list-products__content">
          {products.map((el) => (
            <ClassProduct post={el} key={el.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default ClassProductList;
