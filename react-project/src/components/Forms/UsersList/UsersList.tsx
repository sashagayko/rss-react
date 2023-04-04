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

export default function UsersList(props) {
  console.log(props.props);

  return (
    <>
      {props.props.map((el) => (
        <div className="users-list" key={el}>
          <div className="user">
            <img src={el.profilePicture}></img>
            <div>
              <div>Username: {el.nameInput}</div>

              <div>Birthday: {el.birthday}</div>
              <div>Gender: {el.gender}</div>
              <div>Countries: {el.countries}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <div key={el.nameInput}>{el.nameInput}</div>
    </div>
  );
}
