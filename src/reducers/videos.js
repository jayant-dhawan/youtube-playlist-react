const initialState = {
  playlist: [],
}

const videos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return {
        playlist: state.playlist.concat(action.payload)
      };

    case 'REMOVE_VIDEO':
      return;

    case 'REMOVE_TOP_VIDEO':
      return {
        playlist: state.playlist.slice(1)
      };

    default:
      return state
  }
}

export default videos
