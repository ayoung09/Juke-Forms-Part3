import React from 'react';
import { hashHistory} from 'react-router';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dirty: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleIsTooLong = this.titleIsTooLong.bind(this);
    this.titleDoesNotExist = this.titleDoesNotExist.bind(this);
    this.isDirty = this.isDirty.bind(this);
    this.getAllSongs = this.getAllSongs.bind(this);
  }

  componentDidMount () {
    this.getAllSongs();
  }

  handleChange (e) {
    this.setState({ inputValue: e.target.value , dirty: true});
  }

  handleSubmit (e) {
    e.preventDefault;
    let postVal =  this.state.inputValue;
    this.props.addPlaylist(postVal);
    this.setState({ inputValue: '', dirty: false });
  }

  isDirty () {
    return this.state.dirty;
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
        isDirty={this.isDirty}
        allSongs={this.state.allSongs}
      />
    )
    }
}

export default PlaylistContainer;
