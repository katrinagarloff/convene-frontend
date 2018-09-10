import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLocations } from '../adapter/index'

class LocationsDropDown extends Component {

  componentDidMount(){
    console.log(this.props.locations)
  }

  makeLocationOptions = () => {
    return (
      <option> </option>
    )
  }

render() {
    return (
      <div className="meetup-box">
        <div className="styled-select">
        <select >
          <option value="">Pick from my locations</option>
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

export default connect(mapStateToProps, { getLocations })(LocationsDropDown)
