const initialState = {
  playlist: [],
  autoplay: false
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const videos = (state = initialState, action) => {
  let autoplay = state.autoplay;
  let playlist = [...state.playlist];
  switch (action.type) {
    case 'ADD_VIDEO':
      if (!(playlist.filter(el => el.id === action.payload.id).length > 0)) {
        playlist = state.playlist.concat(action.payload)
      } else {
        alert('Link already present');
      }
      return { playlist, autoplay };

    case 'REMOVE_VIDEO':
      return {
        playlist: playlist.filter((el) => el.id !== action.payload.id),
        autoplay
      };

    case 'REMOVE_TOP_VIDEO':
      return {
        playlist: playlist.slice(1),
        autoplay
      };

    case 'SHUFFLE':
      if (playlist.length > 0) {
        shuffleArray(playlist);
      }
      return { playlist, autoplay };

    case 'AUTOPLAY':
      return {
        playlist,
        autoplay: !autoplay
      };

    default:
      return state
  }
}

export default videos
