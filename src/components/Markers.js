import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleMeetups, setActiveKey } from '../redux/actions'
import { Marker, InfoWindow } from 'react-google-maps'
import { makeQuery } from '../adapter/index'
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"
import { Link } from 'react-router-dom'


class Markers extends Component {

// state = {activeKey: null}



  setMarkers = (meetUps) => {
    return meetUps.map(meetUp => {
      const { id, name, local_date, local_time, description, link} = meetUp
      const { lat, lon } = meetUp.group
      return (

        <Marker
        position={{lat: meetUp.group.lat, lng: meetUp.group.lon}}
        key={id}
        onMouseOver={() => this.props.setActiveKey(id)}
        >
          {
            this.props.activeKey === id ?
            <div className="hidden">
              <InfoWindow key={id} className="hidden">
                  <iframe src={`${link}`} frameBorder="0" id={id}
                  className="hidden"></iframe>
              </InfoWindow>
              </div>
          : null
        }
        </Marker>
      )
    })
  }
    // labelAnchor={new google.maps.Point(0, 0)}

  componentDidMount() {
    // this.props.handleMeetups(['1', '2'])
    this.props.makeQuery({lat: 40.700518, lon: -73.929678})

  }

  render() {
    const { meetUps } = this.props
    return(
      <div>
      {this.setMarkers(meetUps)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    meetUps: state.meetUps,
    activeKey: state.activeKey
  }
}

export default connect(mapStateToProps, { handleMeetups,  makeQuery, setActiveKey})(Markers)
