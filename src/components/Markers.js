import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleMeetups, setActiveKey } from '../redux/actions'
import { Marker, InfoWindow } from 'react-google-maps'
import { makeQuery } from '../adapter/index'
// import { findDOMNode } from 'react-dom'
// import $ from 'jquery'


class Markers extends Component {

// state = {activeKey: null}



  setMarkers = (meetUps) => {
    return meetUps.map(meetUp => {
      const { id, name, local_date, local_time, description, link} = meetUp
      const { lat, lon } = meetUp.venue



      // <iframe src={`${link}`} frameBorder="0" id={id}
      // ></iframe>
      return (

        <Marker
          position={{lat: lat, lng: lon}}
          key={id}
          onMouseOver={() => this.props.setActiveKey(id)}
        >
          {
            this.props.activeKey === id ?
            <React.Fragment >
              <InfoWindow key={id} >
                <div className="info-div">
                  {
                    meetUp.venue.name ?
                    <div><p className="green"> {name} </p> {meetUp.venue.name} <br/> {meetUp.venue.address_1}</div>
                    : <div><p className="green"> {name} </p> {meetUp.venue.address_1} </div>
                   }
                </div>
              </InfoWindow>
              </React.Fragment>
          : null
        }
        </Marker>
      )
    })
  }
    // labelAnchor={new google.maps.Point(0, 0)}

  componentDidMount() {



    // this.props.handleMeetups(['1', '2'])
    // this.props.makeQuery({lat: 40.700518, lon: -73.929678})

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
    searchPoint: state.searchPoint,
    meetUps: state.meetUps,
    activeKey: state.activeKey
  }
}

export default connect(mapStateToProps, { handleMeetups,  makeQuery, setActiveKey})(Markers)
