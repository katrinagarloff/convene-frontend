import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../redux/actions'

const MenuBar = (props) => {
  return (

  <div>

    {props.user.id ?
        <Link to='/logout' className='cute-link' style={{float:'right', margin: '10px'}} onClick={setUser({})}>
        logout
      </Link>
      :
        <Fragment>
        <Link to='/' className='cute-link' style={{float:'right', margin: '10px'}}>
          login
        </Link>
        <Link to='/signup' className='cute-link' style={{float:'right', margin: '10px'}}>
          signup
        </Link>
        </Fragment>
    }
      <div className='menu-bar row'>


    <Link to='/'>
      <div className='nav-link column'>
        <br/>
         home

      </div>
      </Link>

      <Link to='/explore'>
      <div className='nav-link column'>
        <br/>
         explore

      </div>
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
