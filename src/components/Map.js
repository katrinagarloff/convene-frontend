import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { GoogleMapKey } from '../keys.js';
import { connect } from 'react-redux'
import Markers from './Markers'

// `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWT7T21BZM9IGMZOcF9Rp8R1MVRc3jptU&v=3.exp&libraries=geometry,drawing,places`
//`https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}&callback=initMap`
const Map = compose(
  withProps({
   googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}&v=3.exp&libraries=geometry,drawing,places`,
   loadingElement: <div style={{ height: `100%`}} />,
   containerElement: <div style={{ height: `600px`, width: '600px' }} />,
   mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { lat, lon } = props.user


  // componentDidMount() {

    // makeQuery({lat: 40.700518, lon: -73.929678})
  // }




  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: lat, lng: lon }}
    >
      <Markers />
    </GoogleMap>


)

})

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}



export default connect(mapStateToProps)(Map)
