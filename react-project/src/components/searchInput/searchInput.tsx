import React, { ChangeEvent } from 'react';

class SearchInput extends React.Component<unknown, { input: string }> {
  constructor(props: never) {
    super(props);
    this.state = {
      input: '',
    };
  }
  componentDidMount() {
    this.setState({ input: localStorage.getItem('searchInput') || '' });
  }

  save(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target!.value;
    localStorage.setItem('searchInput', target.toString());
    this.setState({ input: target });
    console.log('localStorage', localStorage.getItem('searchInput'));
  }
  render(): React.ReactNode {
    return (
      <div>
        <input type="text" onChange={(e) => this.save(e)} value={this.state.input} />
      </div>
    );
  }
}

export default SearchInput;
