import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (

  <div>
    <Link to='/login' style={{float:'right', margin: '10px'}}>
      login
    </Link>
    <Link to='/signup' style={{float:'right', margin: '10px'}}>
      signup
    </Link>
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

export default MenuBar;
