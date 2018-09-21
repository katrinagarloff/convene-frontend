import React, { Component } from 'react';
import MeetUps from './MeetUps';
import Map from './Map';
import LocationsDropDown from './LocationsDropDown'
import AutoComplete from './AutoComplete'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Explore extends Component {

state = {mounted: false}

updateMount = () => {
  this.setState({mounted: true})
}

showAutoComplete = () => {
  return (<AutoComplete />)
}

render() {
  console.log(this.props.user)
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

          {this.props.user.id ?
          <div className='column'>

            <LocationsDropDown />

          </div>
          :
          <div className='column' >

            <Link to='/' className='cute-link' style={{float:'left', margin: '10px'}}>
                Login
              </Link> <span style={{float:'left', margin: '10px'}}>...to save locations and Meetups</span>
          </div>
        }
        </div>


        <div className='row'>
          <MeetUps />
        </div>
      </div>

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Explore);
