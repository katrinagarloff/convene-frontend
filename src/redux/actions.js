export const handleMeetups = (meetUps) => {
  return {
    type: 'SET_MEETUPS',
    payload: meetUps
  }
}

export const setActiveKey = (key) => {
  return {
    type: 'SET_ACTIVE_KEY',
    payload: key
  }
}

// export const unsetActiveKey = () => {
//   return {
//     type: 'UNSET_ACTIVE_KEY',
//     payload: null
//   }
// }
