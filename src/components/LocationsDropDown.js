import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLocations, makeQuery } from '../adapter/index'

class LocationsDropDown extends Component {

  handleChange = (e) => {
    console.log(e.target.value);
    const location = this.props.locations.find((location) => {
      return parseInt(location.id) === parseInt(e.target.value)
    })
    console.log(location)
    this.props.makeQuery({lat: location.lat, lon: location.lon})
  }



  makeLocationOptions = () => {
    return this.props.locations.map(location => {
      return (
        <option value={location.id}>{location.name}</option>
      )
    })
  }

render() {
    return (
      <div className="meetup-box">
        <div className="styled-select">
        <select onChange={this.handleChange}>
          <option value="">Pick from my locations</option>
          {this.makeLocationOptions()}
        </select>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, { getLocations, makeQuery })(LocationsDropDown)
