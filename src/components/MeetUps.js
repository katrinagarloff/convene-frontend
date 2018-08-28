import React from 'react';
import MeetUpKey from '../keys';

const MeetUps = () => {
  const CORSWrapper = 'https://cors-anywhere.herokuapp.com/'
  const MeetUpURL = `${CORSWrapper}https://api.meetup.com/2/events?key=${MeetUpKey}&group_urlname=ny-tech&sign=true`

  fetch(MeetUpURL, {
    mode: 'cors'
  })
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
  })

  return (
    <div>
      meetups
    </div>
  )
}

export default MeetUps;
