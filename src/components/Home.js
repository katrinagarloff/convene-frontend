import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'

const Home = (props) => {

  return (
    <div>
      {props.user.id ?
        <div> Hello {props.user.name} </div>
        :
        <React.Fragment>
        <Login />
          or...
        <div>
        <Link to={'./signup'}>
          <div>
            Signup
          </div>
        </Link>
        </div>
        </React.Fragment>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { })(Home);
