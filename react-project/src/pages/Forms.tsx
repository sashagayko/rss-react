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

interface invalidForm {
  name: boolean;
  birthday: boolean;
  profilePicture: boolean;
  gender: boolean;
  agree: boolean;
}

interface state {
  userCards: userCards[];
  isModalOpen: boolean;
  invalidForm: invalidForm;
}

// nameInput: React.RefObject<HTMLInputElement>;
// birthday: React.RefObject<HTMLInputElement>;
// profilePicture: React.RefObject<HTMLInputElement>;
// genderMale: React.RefObject<HTMLInputElement>;
// genderFemale: React.RefObject<HTMLInputElement>;
// countries: React.RefObject<HTMLSelectElement>;
// agree: React.RefObject<HTMLInputElement>;

export function Forms() {
  alert('Привет проверяющий, к сожалению я не успел доделать, буду очень благодарен если дашь мне еще немного времени :)')
  const [state, setState] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
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
  // constructor(props: never) {
  //   super(props);
  //   this.nameInput = React.createRef();
  //   this.birthday = React.createRef();
  //   this.profilePicture = React.createRef();
  //   this.genderMale = React.createRef();
  //   this.genderFemale = React.createRef();
  //   this.countries = React.createRef();
  //   this.agree = React.createRef();
  // }

  const onSubmit = (data) => {
    console.log(data);

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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register('nameInput', {
              required: 'Обязятельное поле',
              validate: (value) => value[0] === value[0].toUpperCase(),
            })}
            placeholder="Name"
          />
          {errors?.nameInput && (
            <ErrorMessage
              text={
                errors?.nameInput?.message ||
                'The name must start with uppercase and must not be empty'
              }
            />
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
          <label htmlFor="profilePicture">profile Picture</label>
          <input
            type="radio" 
            {...register('profilePicture', {
              required: 'true',
            })}
            placeholder="profile Picture"
          />
          {errors?.profilePicture && <ErrorMessage text={'Add file'} />}
        </div>
        {/* <div>
          <label htmlFor="profilePicture">profile Picture</label>
          <input
            type="radio"
            {...register('profilePicture', {
              required: 'true',
            })}
            placeholder="profile Picture"
          />
          {errors?.profilePicture && <ErrorMessage text={'Add file'} />}
        </div>
          <input type="radio" id="male" name="gender" value="male" ref={this.genderMale} />
          <label htmlFor="male">male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            ref={this.genderFemale}
            defaultChecked
          />
          <label htmlFor="female">female</label>
        </div>
        <select ref={this.countries}>
          <option value="Belarus">Belarus</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
        </select>
        <label htmlFor="agree">I consent to my personal data</label>
        <input ref={this.agree} type="checkbox" value="I consent to my personal data" />
        {this.state.invalidForm.agree && <ErrorMessage text={'Choose checkbox'} />} */}
        <input type="submit" value="Submit" />
      </form>
      {/* {this.state.userCards.map((user, index: number) => (
        <div key={index}>
          <UsersList props={user} />
        </div>
      ))}
      {this.state.isModalOpen && <SuccessMessage />} */}
    </>
  );
}

export default Forms;
