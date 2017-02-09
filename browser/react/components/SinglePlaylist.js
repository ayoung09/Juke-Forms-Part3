import React from 'react';
import Songs from './Songs';

class SinglePlaylist extends React.Component {
  constructor (props) {
    super(props);

  }

  addSong (event){

  }

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;

    selectPlaylist(playlistId);
  }

  componentWillReceiveProps(nextProps) {
    const selectPlaylist = this.props.selectPlaylist;
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const playlistId = this.props.routeParams.playlistId;

    if(nextPlaylistId !== playlistId){
      selectPlaylist(nextPlaylistId);
    }
  }

render() {
  const playlist = this.props.selectedPlaylist;

  return (
    <div>
      <h3>{ playlist.name }</h3>
      <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <hr />
        <div className="well">
          <form className="form-horizontal" noValidate name="songSelect">
            <fieldset>
              <legend>Add to Playlist</legend>
              <div className="form-group">
                <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                <div className="col-xs-10">
                  <select className="form-control" name="song">
                  {this.props.allSongs.map( song => {
                      <option value={song}> {song.name} </option>
                  })
                }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add Song</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
    </div>
  )}
}


export default SinglePlaylist;
