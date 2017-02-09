import React from 'react';

import NewPlaylist from '../components/NewPlaylist';

class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleIsTooLong = this.titleIsTooLong.bind(this);
    this.titleDoesNotExist = this.titleDoesNotExist.bind(this);
  }

  handleChange (e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault;
    console.log('This is your playlist name: ', this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  titleIsTooLong () {
    return this.state.inputValue.length > 16;
  }

  titleDoesNotExist () {
    return this.state.inputValue.length === 0;
  }

  render () {
    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.inputValue}
        titleDoesNotExist={this.titleDoesNotExist}
        titleIsTooLong={this.titleIsTooLong}
      />
    )
    }
}

export default PlaylistContainer;
