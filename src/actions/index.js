/**
 * 
 * @param {*} link -> Youtube Video Link
 * 
 * This action will store a youtube video link to the store.
 */
export const addVideo = link => ({
  type: 'ADD_VIDEO',
  payload: {
    id: link,
    link
  }
})

/**
 * 
 * @param {*} id -> id for video link in array
 * 
 * This action will remove a youtube video link from the store.
 */
export const removeVideo = id => ({
  type: 'REMOVE_VIDEO',
  payload: {
    id
  }
})

/**
 * 
 * This action will remove a youtube video link from the store when video is finished.
 */
export const removeTopVideo = () => ({
  type: 'REMOVE_TOP_VIDEO'
})

/**
 * 
 * This action will shuffle the array which has youtube video links.
 */
export const shuffle = () => ({
  type: 'SHUFFLE'
})

/**
 * 
 * This action will turn autoplay feature on and off.
 */
export const autoplay = () => ({
  type: 'AUTOPLAY'
})