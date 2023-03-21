import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import products from '../../products.json';
import ProductItem from '../product/ProductItem';
import React from 'react';

describe('ProductItem', () => {
  it('render ProductItem 1', () => {
    render(<ProductItem post={products[0]} />);
    expect(
      screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    ).toBeInTheDocument();
    expect(screen.getByText("Category: men's clothing")).toBeInTheDocument();
    expect(screen.getByText('Price: €109.95')).toBeInTheDocument();
  });
});
