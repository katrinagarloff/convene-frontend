import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
      <Link to='/'> home </Link>
      <Link to='/explore'> explore </Link>
    </div>
  )
}

export default MenuBar;
