import React from 'react';
import { connect } from 'react-redux'
import MeetUp from './MeetUp'

const MeetUps = (props) => {

  const displayMeetUps = () => {
    return props.meetUps.map(meetup => {

      const { id, name, local_date, local_time, description} = meetup
      return (

        <MeetUp key={id} id={id} name={name} description={description} local_date={local_date} local_time={local_time}
          venue={meetup.venue ? meetup.venue : null}
        />)
    })
  }

  displayMeetUps()
  return (
    <div className='meetup-box'>
    <div className="meetup " id="meetup-header"> Meetups </div>
    <div className='scroll'>
      {displayMeetUps()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    meetUps: state.meetUps
  }
}

export default connect(mapStateToProps)(MeetUps)
