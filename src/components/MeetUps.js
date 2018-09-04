import React from 'react';
import { connect } from 'react-redux'
import { MeetUpKey } from '../keys';
import MeetUp from './MeetUp'

const MeetUps = (props) => {
  // const CORSWrapper = 'https://cors-anywhere.herokuapp.com/'
  // const MeetUpURL = `${CORSWrapper}https://api.meetup.com/2/events?key=${MeetUpKey}&group_urlname=ny-tech&sign=true`
  // const { id, name, local_date, local_time} = props.meetUps
  console.log(props)

  const displayMeetUps = () => {
    return props.meetUps.map(meetup => {
      const { id, name, local_date, local_time, description} = meetup
      return (
        <MeetUp id={id} name={name} description={description} local_date={local_date} local_time={local_time}
          venue={meetup.venue ? meetup.venue : null}
        />)
    })
  }

  displayMeetUps()
  return (
    <div>
      {displayMeetUps()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    meetUps: state.meetUps
  }
}

export default connect(mapStateToProps)(MeetUps)
