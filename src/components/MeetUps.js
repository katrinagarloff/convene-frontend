import React from 'react';

const MeetUps = () => {
  const MeetUpURL = 'https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4'

  fetch('https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4').then(resp => resp.json()).then(console.log)
  return (
    <div>
      meetups
    </div>
  )
}

export default MeetUps;
