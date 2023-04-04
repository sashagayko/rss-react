import React, { FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SuccessMessage } from '../components/SuccessMessage/SuccessMessage';
import UsersList from '../components/Forms/UsersList/UsersList';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

interface userCards {
  name: string;
  birthday: string;
  profilePicture: string;
  gender: string;
  countries: string;
  agree: boolean;
}

interface state {
  userCards: userCards[];
  isModalOpen: boolean;
}

export function Forms() {
  const [state, setState] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // state = {
  //   userCards: [],
  //   isModalOpen: false,
  //   invalidForm: {
  //     name: false,
  //     birthday: false,
  //     profilePicture: false,
  //     agree: false,
  //   },
  // };

  const onSubmit = (data: userCards) => {
    setState([...state, data]);
    // console.log('state', state);

    // this.setState(() => ({
    //   invalidForm: {
    //     name:
    //       this.nameInput.current!.value.toString() == '' ||
    //       this.nameInput.current!.value.toString()[0] ==
    //         this.nameInput.current!.value.toString()[0].toLowerCase(),
    //     birthday: this.birthday.current!.value == '',
    //     profilePicture: this.profilePicture.current!.value.toString() == '',
    //     agree: this.agree.current!.checked == false,
    //   },
    // }));
    // setTimeout((e: FormEvent<HTMLFormElement>) => this.validate(e), 0);
  };

  // validate(e: FormEvent<HTMLFormElement>) {
  //   console.log(e);
  //   if (!Object.values(this.state.invalidForm).filter((el) => el === true).length) {
  //     this.setState((state: state) => ({
  //       isModalOpen: true,
  //       userCards: [
  //         ...state.userCards,
  //         {
  //           name: this.nameInput.current!.value.toString(),
  //           birthday: this.birthday.current!.value,
  //           profilePicture: URL.createObjectURL(this.profilePicture.current!.files![0]),
  //           gender: this.genderMale.current!.checked
  //             ? this.genderMale.current!.value
  //             : this.genderFemale.current!.value,
  //           countries: this.countries.current!.value,
  //           agree: this.agree.current!.checked,
  //         },
  //       ],
  //     }));
  //     setTimeout(() => {
  //       // const target = e.target as HTMLFormElement;
  //       // target?.reset();
  //     }, 10);
  //     setTimeout(() => {
  //       this.setState(() => ({
  //         isModalOpen: false,
  //       }));
  //     }, 2000);
  //   }
  // }

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
      {/* {state.isModalOpen && <SuccessMessage />} */}
    </>
  );
}

export default Forms;
