import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../redux/actions'

const MenuBar = (props) => {
  return (

  <div>

    {props.user.id ?
        <Link to='/logout' style={{float:'right', margin: '10px'}} onClick={setUser({})}>
        logout
      </Link>
      :
        <React.Fragment>
        <Link to='/' style={{float:'right', margin: '10px'}}>
          login
        </Link>
        <Link to='/signup' style={{float:'right', margin: '10px'}}>
          signup
        </Link>
        </React.Fragment>
    }
      <div className='menu-bar row'>


    <Link to='/'>
      <span className='nav-link column'>
         home
      </span>
      </Link>
      <Link to='/explore'>
      <span className='nav-link column'>
         explore
      </span>
      </Link>

    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { setUser })(MenuBar);
