import React from 'react';
import MeetUps from './MeetUps';
import Map from './Map';

const Explore = () => {

  return (
    <div className='flex-container'

    >
      <Map isMarkerShown={true}
      />
      <MeetUps className='meetup-container'/>
    </div>
  )
}

export default Explore;
