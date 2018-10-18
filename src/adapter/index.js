const BASE_URL = ' https://convene-backend.herokuapp.com'

export function makeQuery(term) {
  return (dispatch) => {
  return fetch(BASE_URL + '/queries',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({term: term })
    }
  )
  .then(resp => resp.json())
  .then(json => {
    console.log(json.response)
    dispatch({
      type: 'SET_MEETUPS',
      meetUps: json.response.filter(meetup => meetup.venue),
      searchPoint: {lat: term.lat, lon: term.lon}
    })

  })
  }
}



export function createUser(user) {
  return (dispatch) => {

  return fetch(BASE_URL + '/users',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({user: user})
    }
  )
  .then(resp => resp.json())
  .then(json => {
    // console.log(json)
    if(json.id) {
      return dispatch({
        type: 'SET_USER',
        payload: {
        user: {
          id: json.id,
          name: json.name,
          username: json.user_name
        }
      }
      })
    } else {
      return json
    }
  })
  }
}

export function getUser(user) {

  return (dispatch) => {
    return fetch(BASE_URL + '/login',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({user: user})
      }
    )
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
    if(json.id) {
      getLocations(json.id)
      return dispatch({
        type: 'SET_USER',
        payload:
          {user:
          {
            id: json.id,
            name: json.name,
            username: json.user_name
          },
        locations: [ ...json.locations ]
      }
    })
    } else {
      alert("login failed")
    }
  }
)
}
}


export function saveLocation(location) {
  const { name, lon, lat, userId } = location

  location.name.length === 0 ? location.name = 'home' : null;
  return (dispatch) => {

    return fetch(BASE_URL + `/users/${userId}/locations`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({location: location})
      }
    )
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      return dispatch({
        type: 'ADD_LOCATION',
        payload: json
      })
    })
  }
}

export function getLocations(userId){

  return (dispatch) => {
    return fetch(BASE_URL + `/users/${userId}/locations`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      if (json.length > 0) {
      return dispatch({
        type: 'GET_LOCATIONS',
        payload: json
      })
    }
    })
  }
}
