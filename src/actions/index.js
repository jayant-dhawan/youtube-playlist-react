let nextVideo = 0;

export const addVideo = link => ({
  type: 'ADD_VIDEO',
  payload: {
    id: nextVideo++,
    link
  }
})

export const removeVideo = id => ({
  type: 'REMOVE_VIDEO',
  payload: {
    id
  }
})

export const removeTopVideo = () => ({
  type: 'REMOVE_TOP_VIDEO'
})