/** @format */

import React from 'react';

import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img
          className='menu-icon'
          src={assets.menu_icon}
          alt='Menu Icon'
        />
        <img
          src={assets.logo}
          alt=''
          className='logo'
        />
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input
            type='text'
            placeholder='Search'
            name=''
            id=''
          />

          <img
            src={assets.search_icon}
            alt='Search Icon'
          />
        </div>
      </div>
      <div className='nav-right flex-div'>
        <img
          src={assets.upload_icon}
          alt='Upload Icon'
          className=''
        />
        <img
          src={assets.more_icon}
          alt='More Icon'
          className=''
        />
        <img
          src={assets.notification_icon}
          alt='Notification Icon'
          className=''
        />
        <img
          src={assets.profile_icon}
          alt='Profile Icon'
          className='user-icon'
        />
      </div>
    </nav>
  );
};

export default Navbar;
