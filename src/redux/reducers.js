const defaultState = {
  searchPoint: {
    lat: 40.700518,
    lon: -73.929678
    },
  meetUps: [],
  activeKey: null
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MEETUPS':
      return {
        ...state,
        meetUps: [ ...action.meetUps ],
        searchPoint: { ...action.searchPoint}
      }
      break;
      case 'SET_SEARCH_POINT':
      console.log(action.payload)
      return {
        ...state,
      searchPoint: { ...action.payload }
    }
      break;
      case 'SET_ACTIVE_KEY':
      console.log(action.payload)
      return {
        ...state,
        activeKey: action.payload
      }
      break;
    default:
    return state
  }
}
