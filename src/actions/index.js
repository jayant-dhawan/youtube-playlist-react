export const addVideo = link => ({
  type: 'ADD_VIDEO',
  payload: {
    id: link,
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

export const shuffle = () => ({
  type: 'SHUFFLE'
})

export const autoplay = () => ({
  type: 'AUTOPLAY'
})