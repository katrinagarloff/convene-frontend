import React, { Component }from 'react'
import { connect } from 'react-redux'
import { setActiveKey } from '../redux/actions'
import Parser from 'html-react-parser'

class MeetUp extends Component {
  // give this component state toggle: t/f
  state = { toggle: false }


  toggleInfo = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const { id, name, local_date, local_time, description } = this.props
  return (

    // click event that toggles


    <div className="meetup-border "
    onMouseOver={() => this.props.setActiveKey(id) }
    onClick={this.toggleInfo}>


        <div className="meetup pink" >
          {name}  <i className="fas fa-caret-down" style={{float:'right'}}></i>
        </div>

        {this.state.toggle ?
          <React.Fragment>
        <div className="meetup-overlay meetup pink" id={`info-${id}`}>
          <br/>{local_date} {local_time}<br/>{Parser(`${description}`)}<br/>
        </div>
          </React.Fragment>
          : null }
  </div>

  )
}
}

export default connect(null, { setActiveKey })(MeetUp)
