import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SuccessMessage } from '../components/SuccessMessage/SuccessMessage';
import UsersList from '../components/Forms/UsersList/UsersList';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { userCards } from '../types';

export function Forms() {
  const [state, setState] = useState<userCards[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<userCards>();

  const onSubmit: SubmitHandler<userCards> = (data: userCards): void => {
    const { agreement, birthday, countries, gender, nameInput, profilePicture }: userCards = data;
    setState([
      ...state,
      {
        agreement: agreement,
        birthday: birthday,
        countries: countries,
        gender: gender,
        nameInput: nameInput,
        profilePicture: profilePicture,
      },
    ]);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            {...register('nameInput', {
              required: 'Обязятельное поле',
              validate: (value) => value[0] === value[0].toUpperCase(),
            })}
            placeholder="Name"
          />
          {errors?.nameInput && (
            <ErrorMessage text={'The name must start with uppercase and must not be empty'} />
          )}
        </div>
        <div>
          <label htmlFor="birthday">birthday</label>
          <input
            type="date"
            {...register('birthday', {
              required: 'true',
            })}
            placeholder="birthday"
          />
          {errors?.birthday && <ErrorMessage text={'The birthday must not be empty'} />}
        </div>
        <div>
          <label htmlFor="profilePicture">profile Picture</label>
          <input
            type="file"
            {...register('profilePicture', {
              required: 'true',
            })}
            placeholder="profile Picture"
          />
          {errors?.profilePicture && <ErrorMessage text={'Add file'} />}
        </div>
        gender:
        <div>
          <label htmlFor="gender">male</label>
          <input
            type="radio"
            value="male"
            {...register('gender', {
              required: 'Select gender',
            })}
          />
          {errors?.gender && <ErrorMessage text={'Select gender'} />}
        </div>
        <div>
          <label htmlFor="gender">female</label>
          <input
            type="radio"
            value="female"
            {...register('gender', {
              required: 'Select gender',
            })}
          />
          {errors?.gender && <ErrorMessage text={'Select gender'} />}
        </div>
        <div>
          <label htmlFor="agreement">I consent to my personal data</label>
          <input
            type="checkbox"
            {...register('agreement', {
              required: 'Accept the agreement!',
            })}
          />
          {errors?.agreement && <ErrorMessage text={'Accept the agreement!'} />}
        </div>
        <span>countries</span>
        <select
          {...register('countries', {
            required: 'Select your countries',
          })}
        >
          <option value="Belarus">Belarus</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
        </select>
        {errors?.countries && <ErrorMessage text={'Select your countries'} />}
        <input type="submit" value="Submit" />
      </form>

      <UsersList props={state} />
      {isModalOpen && <SuccessMessage />}
    </>
  );
}

export default Forms;
