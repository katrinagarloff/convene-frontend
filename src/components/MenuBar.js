import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div className='menu-bar row'>
      <div className='nav-link column'>
        <Link to='/'> home </Link>
      </div>
      <div className='nav-link column'>
        <Link to='/explore'> explore </Link>
      </div>
    </div>
  )
}

export default MenuBar;
