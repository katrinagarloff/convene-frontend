import React, { Component } from 'react';
import MeetUps from './MeetUps';
import Map from './Map';
import AutoComplete from './AutoComplete'
import { GoogleMapKey } from '../keys.js'

class Explore extends Component {
state = {mounted: false}

updateMount = () => {
  this.setState({mounted: true})
}

showAutoComplete = () => {
  return (<AutoComplete />)
}

render() {
  return (
    <div className='row'>
    <div id='map' className='column meetup-box'>
    <div className='map-frame'>
        <Map isMarkerShown={true}
        />
        </div>
    </div>

      <div className='column'>
        <div>
          <AutoComplete />
        </div>

        <div>
          <MeetUps />
        </div>
      </div>
    </div>
    )
  }
}

export default Explore;
