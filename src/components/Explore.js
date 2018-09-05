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
}

export default Explore;
