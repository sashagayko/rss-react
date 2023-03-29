import React from 'react';
import './UsersList.css';

interface User {
  props: {
    name: string;
    birthday: string;
    profilePicture: string;
    gender: string;
    countries: string;
  };
}

export default function UsersList(user: User) {
  return (
    <div className="users-list">
      <div className="user">
        <img src={user.props!.profilePicture}></img>
        <div>
          <div>Username: {user.props!.name}</div>
          <div>Birthday: {user.props!.birthday}</div>
          <div>Gender: {user.props!.gender}</div>
          <div>Countries: {user.props!.countries}</div>
        </div>
      </div>
    </div>
  );
}
