const BASE_URL = 'http://localhost:3000'

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
    if(json.id) {
      return dispatch({
        type: 'SET_USER',
        payload: {
          id: json.id,
          name: json.name,
          username: json.user_name
        }
      })
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
      return dispatch({
        type: 'SET_USER',
        payload:
        {
          id: json.id,
          name: json.name,
          username: json.user_name
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
        type: 'SET_LOCATIONS',
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
      return dispatch({
        type: 'GET_LOCATIONS',
        payload: json
      })
    })
  }
}
