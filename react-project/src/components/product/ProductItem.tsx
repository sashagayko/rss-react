import React from 'react';
import './ProductItem.css';

interface IPost {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IProps {
  post: IPost;
}

class ClassProduct extends React.Component<IProps> {
  render() {
    const post = this.props.post;
    return (
      <div className="product">
        <div className="product__content">
          <img className="product__image" src={post.image} alt={post.title} />
          <div className="product__description">
            <div className="product__title">{post.title}</div>
            <h5 className="product__price">Price: €{post.price}</h5>
            <div className="product__title">Category: {post.category}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassProduct;
