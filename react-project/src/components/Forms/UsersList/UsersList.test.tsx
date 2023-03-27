import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import UsersList from './UsersList';

const user = {
  name: 'Sasha',
  birthday: '10.01.2002',
  profilePicture: 'http//',
  gender: 'male',
  countries: 'Bel',
};

describe('ProductItem', () => {
  it('render ProductItem 1', () => {
    render(<UsersList props={user} />);
    expect(screen.getByText('Username: Sasha')).toBeInTheDocument();
    expect(screen.getByText('Birthday: 10.01.2002')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
    expect(screen.getByText('Countries: Bel')).toBeInTheDocument();
  });
});
