import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { App, WrappedApp } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders Home', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/lalala']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
