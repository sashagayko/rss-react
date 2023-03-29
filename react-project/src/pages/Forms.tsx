import React, { FormEvent } from 'react';
import { SuccessMessage } from '../components/SuccessMessage/SuccessMessage';
import UsersList from '../components/Forms/UsersList/UsersList';

interface userCards {
  name: string;
  birthday: string;
  profilePicture: string;
  gender: string;
  countries: string;
}

interface state {
  userCards: userCards[];
}

class Forms extends React.Component {
  nameInput: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  profilePicture: React.RefObject<HTMLInputElement>;
  genderMale: React.RefObject<HTMLInputElement>;
  genderFemale: React.RefObject<HTMLInputElement>;
  countries: React.RefObject<HTMLSelectElement>;
  state = { userCards: [], isModalOpen: false };
  constructor(props: never) {
    super(props);
    this.nameInput = React.createRef();
    this.birthday = React.createRef();
    this.profilePicture = React.createRef();
    this.genderMale = React.createRef();
    this.genderFemale = React.createRef();
    this.countries = React.createRef();
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState((state: state) => ({
      isModalOpen: true,
      userCards: [
        ...state.userCards,
        {
          name: this.nameInput.current!.value.toString(),
          birthday: this.birthday.current!.value,
          profilePicture: URL.createObjectURL(this.profilePicture.current!.files![0]),
          gender: this.genderMale.current!.checked
            ? this.genderMale.current!.value
            : this.genderFemale.current!.value,
          countries: this.countries.current!.value,
        },
      ],
    }));
    setTimeout(() => {
      const target = e.target as HTMLFormElement;
      target?.reset();
    }, 0);
    setTimeout(() => {
      this.setState(() => ({
        isModalOpen: false,
      }));
    }, 2000);
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>Forms</h1>
        <form onSubmit={(e) => this.handleSubmit(e)} className="form">
          <label htmlFor="name">Name</label>
          <input type="text" ref={this.nameInput} placeholder="Name" required />
          <label htmlFor="birthday">birthday</label>
          <input type="date" ref={this.birthday} placeholder="birthday" required />
          <label htmlFor="profilePicture">profile picture</label>
          <input type="file" ref={this.profilePicture} placeholder="profile picture" required />
          <div>
            gender:
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
          <label htmlFor="I consent to my personal data">I consent to my personal data</label>
          <input type="checkbox" value="I consent to my personal data" required />
          <input type="submit" value="Submit" />
        </form>
        {this.state.userCards.map((user, index: number) => (
          <div key={index}>
            <UsersList props={user} />
          </div>
        ))}
        {this.state.isModalOpen && <SuccessMessage />}
      </>
    );
  }
}

export default Forms;
