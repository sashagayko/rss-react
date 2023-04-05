import React, { ChangeEvent, useEffect, useState } from 'react';
import classes from './searchInput.module.css';

export function SearchInput() {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('searchInput') || '');

  useEffect(() => {
    localStorage.setItem('searchInput', inputValue);
  });

  const save = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target!.value;
    setInputValue(target);
  };

  return (
    <div className={classes['search-input__wrapper']}>
      <input
        className={classes['search-input']}
        type="text"
        onChange={(e) => save(e)}
        value={inputValue}
      />
      <svg
        className={classes['search-input__svg']}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
          fill="#43494D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9429 13.9429C14.3334 13.5524 14.9666 13.5524 15.3571 13.9429L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L13.9429 15.3571C13.5524 14.9666 13.5524 14.3334 13.9429 13.9429Z"
          fill="#43494D"
        />
      </svg>
    </div>
  );
}

export default SearchInput;
