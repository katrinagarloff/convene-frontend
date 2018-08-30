import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { GoogleMapKey } from '../keys.js';
import { connect } from 'react-redux'

// `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWT7T21BZM9IGMZOcF9Rp8R1MVRc3jptU&v=3.exp&libraries=geometry,drawing,places`
//`https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}&callback=initMap`
const Map = compose(
  withProps({
   googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}&v=3.exp&libraries=geometry,drawing,places`,
   loadingElement: <div style={{ height: `100%` }} />,
   containerElement: <div style={{ height: `400px` }} />,
   mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { lat, lon } = props.user
  const { meetUps } = props

  const setMarkers = () => {
    return meetUps.map(meetUp => {
      return <Marker position={{lat: meetUp.lat, lng: meetUp.lon}} />
    })
  }

  console.log(meetUps)
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: lat, lng: lon }}
    >
      {meetUps.length > 0 ? setMarkers() : null}
    </GoogleMap>
)

})

const mapStateToProps = (state) => {
  return {
    user: state.user,
    meetUps: state.meetUps
  }
}

export default connect(mapStateToProps)(Map)
