import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ currentlySelectedSong }) => {
  if (!currentlySelectedSong) {
    return <div>Select a song form the list! </div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {currentlySelectedSong.title}</p>
      <p>Duration: {currentlySelectedSong.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { currentlySelectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);