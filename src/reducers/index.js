import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: 'BLINDING LIGHTS', duration: '3:18' },
    { title: 'DANCE MONKEY', duration: '4:18' },
    { title: 'ROSES', duration: '5:18' },
    { title: 'DON\'T START NOW', duration: '3:22' },
    { title: 'BEFORE YOU GO', duration: '2:45' },
    { title: 'ROCKSTAR', duration: '3:21' }
  ]
};

const selectedSongReducer = (currentlySelectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return currentlySelectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});