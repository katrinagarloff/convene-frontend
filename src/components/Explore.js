import React from 'react';
import MeetUps from './MeetUps';
import Map from './Map';
import { makeQuery } from '../adapter/index.js';

const Explore = () => {
  makeQuery('hello')
  return (
    <div>
      explore
      <MeetUps />
      <Map isMarkerShown={true}
      />
    </div>
  )
}

export default Explore;
