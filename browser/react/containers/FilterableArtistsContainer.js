import React from 'react';

import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterArtists = this.filterArtists.bind(this);
  }

  handleChange (e) {
    this.setState({inputValue: e.target.value});
  }

  filterArtists () {
    const inputValue = this.state.inputValue.toLowerCase();
    const allArtists = this.props.artists;
    return allArtists.filter(artist => artist.name.toLowerCase().startsWith(inputValue));
  }

  render() {

    console.log('these are props of FAC: ', this.props);
    return (
      <div>

        <FilterInput handleChange={this.handleChange} />
        <Artists artists={this.filterArtists()} />
      </div>
    );
  }

}

export default FilterableArtistsContainer;
