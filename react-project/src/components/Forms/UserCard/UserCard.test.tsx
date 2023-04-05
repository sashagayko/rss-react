import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import UserCard from './UserCard';

const test = {
  agreement: true,
  birthday: '2023-04-09',
  countries: 'Belarus',
  gender: 'male',
  nameInput: 'SASHA',
  profilePicture: '',
};

describe('ProductItem', () => {
  it('render ProductItem 1', () => {
    render(<UserCard key={test.nameInput} {...test} />);
    expect(screen.getByText('Birthday: 2023-04-09')).toBeInTheDocument();
    expect(screen.getByText('Username: SASHA')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
    expect(screen.getByText('Countries: Belarus')).toBeInTheDocument();
  });
});
