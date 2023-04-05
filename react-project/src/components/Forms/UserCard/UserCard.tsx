import React from 'react';
import { userCards } from '../../../types';

export default function UserCard({
  birthday,
  countries,
  gender,
  nameInput,
  profilePicture,
}: userCards) {
  return (
    <div className="users-list" key={nameInput}>
      <div className="user">
        <img src={window.URL.createObjectURL(profilePicture[0])}></img>
        <div>
          <div>Username: {nameInput}</div>

          <div>Birthday: {birthday}</div>
          <div>Gender: {gender}</div>
          <div>Countries: {countries}</div>
        </div>
      </div>
    </div>
  );
}
