import React from 'react';
import GenderInput from '../components/Forms/GenderInput/GenderInput';

// interface userCards<> {
//   nameInput: string;
//   birthday: string;
//   profilePicture: string;
//   gender: string;
//   countries: string;
// }
// interface state {
//   userCards: userCards;
// }

class Forms extends React.Component {
  nameInput: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  profilePicture: React.RefObject<HTMLInputElement>;
  genderMale: React.RefObject<HTMLInputElement>;
  genderFemale: React.RefObject<HTMLInputElement>;
  countries: React.RefObject<HTMLInputElement>;
  state = { userCards: [] };
  constructor(props: never) {
    super(props);
    this.nameInput = React.createRef();
    this.birthday = React.createRef();
    this.profilePicture = React.createRef();
    this.genderMale = React.createRef();
    this.genderFemale = React.createRef();
    this.countries = React.createRef();
  }

  handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    this.setState((state) => ({
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
    console.log(this.state);
    console.log(this.profilePicture.current!.files![0]);
    setTimeout(() => {
      const target = e.target as HTMLFormElement;
      target?.reset();
    }, 0);
  };

  render(): React.ReactNode {
    return (
      <>
        {this.state.userCards.map((user: string) => (
          <div key={user.name}>
            {user!.name} {user!.birthday} {user!.gender} {user!.countries}{' '}
            <img src={user!.profilePicture}></img>
          </div>
        ))}
        <h1>Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={this.nameInput} placeholder="Name" />
          <label htmlFor="birthday">birthday</label>
          <input type="date" ref={this.birthday} placeholder="birthday" />
          <label htmlFor="profilePicture">profile picture</label>
          <input type="file" ref={this.profilePicture} placeholder="profile picture" />
          {/* <GenderInput props={this.state}></GenderInput> */}
          <div>
            gender
            <input type="radio" id="male" name="gender" value="male" ref={this.genderMale} />
            <label htmlFor="male">male</label>
            <input type="radio" id="female" name="gender" value="female" ref={this.genderFemale} />
            <label htmlFor="female">female</label>
          </div>
          <select ref={this.countries}>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
          <label htmlFor="I consent to my personal data">I consent to my personal data</label>
          <input type="checkbox" value="I consent to my personal data" />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Forms;
