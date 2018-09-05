import React from 'react';
import MeetUps from './MeetUps';
import Map from './Map';
import AutoComplete from './AutoComplete'

const Explore = () => {

  return (
    <div className='flex-container'>
    <AutoComplete />
    <div id='map'>
      <Map isMarkerShown={true}
      />
      </div>
      <MeetUps />
    </div>
  )
}

export default Explore;
