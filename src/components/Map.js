import React from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { connect } from 'react-redux'
import Markers from './Markers'

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
      center={{lat: parseFloat(lat, 10), lng: parseFloat(lon, 10)}}
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
