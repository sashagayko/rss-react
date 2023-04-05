import React from 'react';

interface userCards {
  nameInput: string;
  birthday: string;
  profilePicture: string;
  gender: string;
  countries: string;
  agreement: boolean;
}

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
        <img src={profilePicture}></img>
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
