import React from 'react'
import { connect } from 'react-redux'
import { setActiveKey } from '../redux/actions'

const MeetUp = (props) => {

  return (
    <div className="meetup-border">
    <div className="meetup pink" onClick={(e) => props.setActiveKey(props.id)}>
    {props.name}
    </div>
    </div>
  )
}

export default connect(null, { setActiveKey })(MeetUp)
