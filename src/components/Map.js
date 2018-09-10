import React from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { connect } from 'react-redux'
import Markers from './Markers'

// `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWT7T21BZM9IGMZOcF9Rp8R1MVRc3jptU&v=3.exp&libraries=geometry,drawing,places`
//`https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}&callback=initMap`
const Map = compose(
  withProps({
   loadingElement: <div style={{ height: `100%`}} />,
   containerElement: <div style={{ height: `600px`, width: '100%' }} />,
   mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  const { lat, lon } = props.searchPoint

  return (

    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: lat, lng: lon }}
      center={{lat: lat, lng: lon}}
      className="map"
    >
      <Markers />
    </GoogleMap>


)

})

const mapStateToProps = (state) => {
  return {
    searchPoint: state.searchPoint
  }
}



export default connect(mapStateToProps)(Map)
