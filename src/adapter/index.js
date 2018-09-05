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
      meetUps: json.response,
      searchPoint: {lat: term.lat, lon: term.lon}
    })
    
  })
  }
}

function normalizeData(meetUp){

}
