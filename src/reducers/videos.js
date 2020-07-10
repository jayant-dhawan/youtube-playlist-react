const initialState = {
  playlist: [],
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const videos = (state = initialState, action) => {
  let playlist = [...state.playlist];
  switch (action.type) {
    case 'ADD_VIDEO':
      if (!(playlist.filter(el => el.id === action.payload.id).length > 0)) {
        playlist = state.playlist.concat(action.payload)
      } else {
        alert('Link already present');
      }
      return { playlist };

    case 'REMOVE_VIDEO':
      return {
        playlist: playlist.filter((el) => el.id !== action.payload.id)
      };

    case 'REMOVE_TOP_VIDEO':
      return {
        playlist: playlist.slice(1)
      };

    case 'SHUFFLE':
      if (playlist.length > 0) {
        shuffleArray(playlist);
      }
      return { playlist };

    default:
      return state
  }
}

export default videos
