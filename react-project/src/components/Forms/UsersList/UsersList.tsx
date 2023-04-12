import React from 'react';
import './UsersList.css';
import UserCard from '../UserCard/UserCard';
import { userCards } from '../../../types';

interface Users {
  props: userCards[];
}

export default function UsersList(Users: Users) {
  return (
    <>
      <div>Users List</div>
      {Users.props.map((userCards: userCards) => (
        <UserCard key={userCards.nameInput} {...userCards} />
      ))}
    </>
  );
}
