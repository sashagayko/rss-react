import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorMessage } from './ErrorMessage';

describe('ProductItem', () => {
  it('render ProductItem 1', () => {
    render(<ErrorMessage text={'The name must start with uppercase and must not be empty'} />);
    expect(
      screen.getByText('The name must start with uppercase and must not be empty')
    ).toBeInTheDocument();
  });
});
