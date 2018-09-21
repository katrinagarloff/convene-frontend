const defaultState = {
  user: {},
  locations: [],
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
      // console.log(action.payload)
      return {
        ...state,
      searchPoint: { ...action.payload }
    }
      break;
      case 'SET_ACTIVE_KEY':
      // console.log(action.payload)
      return {
        ...state,
        activeKey: action.payload
      }
      break;
      case 'SET_USER':
      console.log(action.payload)
      if(action.payload.locations) {
      return {
        ...state,
        user: { ...action.payload.user },
        locations: [ ...action.payload.locations ]
      }
    } else {
      return {
        ...state,
        user: { ...action.payload.user }
      }
    }
      break;
      case 'GET_LOCATIONS':
      console.log(action.payload)
      return {
        ...state,
        locations: [ ...action.payload ]
      }
      break;
      case 'ADD_LOCATION':
      console.log(action.payload)
      return {
        ...state,
        locations: [ ...state.locations, action.payload ]
      }

    default:
    return state
  }
}
