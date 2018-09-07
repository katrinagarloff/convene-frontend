import React from 'react'
import { connect } from 'react-redux'
import { setActiveKey } from '../redux/actions'

const MeetUp = (props) => {

  return (

    <div className="meetup-border " onMouseOver={() => props.setActiveKey(props.id)}>

        <div className="meetup pink">
          {props.name}
        </div>

  </div>

  )
}

export default connect(null, { setActiveKey })(MeetUp)
