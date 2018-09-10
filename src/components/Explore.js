import React, { Component } from 'react';
import MeetUps from './MeetUps';
import Map from './Map';
import LocationsDropDown from './LocationsDropDown'
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
          <Map isMarkerShown={true}/>
        </div>
      </div>

      <div className='column'>
        <div className='row'>

          <div className='column'>
            <AutoComplete />
          </div>
          <div className='column'>
            <LocationsDropDown />
          </div>

        </div>


        <div className='row'>
          <MeetUps />
        </div>
      </div>

    </div>
    )
  }
}

export default Explore;
