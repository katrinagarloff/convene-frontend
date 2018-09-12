import React from 'react'
import { connect } from 'react-redux'
import { setActiveKey } from '../redux/actions'
import Parser from 'html-react-parser'

const MeetUp = (props) => {
  const { id, name, local_date, local_time, description } = props
  return (

    <div className="meetup-border " onMouseOver={() => props.setActiveKey(id)}>

        <a href={`#info-${id}`}>hello</a>
        <div className="meetup pink">
          {name}  <i class="fas fa-caret-down" style={{float:'right'}}></i>
        </div>
        <div className="meetup-overlay meetup pink" id={`info-${id}`}>
          <br/>{local_date} {local_time}<br/>{Parser(`${description}`)}<br/>
        </div>

  </div>

  )
}

export default connect(null, { setActiveKey })(MeetUp)
