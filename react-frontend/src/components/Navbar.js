import React from 'react'
import {Link} from 'react-router-dom'

function Navbar (props) {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <img src={require('../images/logo.png')} height='45px' width='45px' />
      </div>
      <div className='navbar-container'>
        <Link to='/'>
          <img className='navbar-item' src={require('../images/home-white.png')} height='25px' width='25px' />
        </Link>
        <Link to='/notifications'>
          <img className='navbar-item' src={require('../images/bell-white.png')} height='25px' width='25px' />
        </Link>
        <Link to='/profile/SpaceX'>
          <img className='navbar-item' src={require('../images/user-white.png')} height='25px' width='25px' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
