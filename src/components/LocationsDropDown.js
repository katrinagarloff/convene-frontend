import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { getLocations, makeQuery } from '../adapter/index'

class LocationsDropDown extends Component {

  state = { toggle: false }

  handleChange = (e) => {
    const location = this.props.locations.find((location) => {
      return parseInt(location.id, 10) === parseInt(e.target.value, 10)
    })
    console.log(location)
    this.props.makeQuery({lat: location.lat, lon: location.lon})
    this.toggleLoc()
  }



  makeLocationOptions = () => {
    return this.props.locations.map(location => {
      return (
        <li key={location.id} value={location.id} onClick={this.handleChange}>{location.name}</li>
      )
    })
  }

  toggleLoc = () => {
    this.setState({toggle: !this.state.toggle})
  }

render() {
    return (
      <Fragment>
      
      <div className="meetup-box">
        <div className="styled-select" onClick={this.toggleLoc}>
        Pick from my locations
        </div>
        {this.state.toggle ?
        <ul className="dropdown">
        {this.makeLocationOptions()}
      </ul>
      : null }



    </div>

  </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, { getLocations, makeQuery })(LocationsDropDown)
