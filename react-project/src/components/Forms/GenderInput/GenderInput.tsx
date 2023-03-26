import React from 'react';

export default function GenderInput(props) {
  console.log('ff',props.props.userCards);

  return (
    <>
      gender
      <input type="radio" id="male" name="gender" value="male" ref={props.props.userCards.genderMale} />
      <label htmlFor="male">male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        ref={props.props.userCards.genderFemale}
      />
      <label htmlFor="female">female</label>
    </>
  );
}
