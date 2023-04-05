import React from 'react';
import './UsersList.css';
import UserCard from '../UserCard/UserCard';

interface Users {
  props: userCards[];
}

interface userCards {
  nameInput: string;
  birthday: string;
  profilePicture: string;
  gender: string;
  countries: string;
  agreement: boolean;
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
