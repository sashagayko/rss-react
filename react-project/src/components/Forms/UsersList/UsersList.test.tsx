import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import UsersList from './UsersList';

const user = [
  {
    agreement: true,
    birthday: '2023-04-09',
    countries: 'Belarus',
    gender: 'male',
    nameInput: 'SASHA',
    profilePicture: '',
  },
];

describe('ProductList', () => {
  it('render', () => {
    render(<UsersList props={user} />);
    expect(screen.getByText('User')).toBeInTheDocument();
  });
});
