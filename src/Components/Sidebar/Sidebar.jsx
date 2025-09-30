/** @format */

import React from 'react';

import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className='shortcut-links'>
        <div className='side-link'>
          <img
            src={assets.home}
            alt='Home'
            className=''
          />
          <p className=''>Home</p>
        </div>
        <div className='side-link'>
          <img
            src={assets.game_icon}
            alt='Home'
            className=''
          />
          <p className=''>Gaming</p>
        </div>

        <div className='side-link'>
          <img
            src={assets.automobiles}
            alt='Home'
            className=''
          />
          <p className=''>Automobiles</p>
        </div>

        <div className='side-link'>
          <img
            src={assets.sports}
            alt='Home'
            className=''
          />
          <p className=''>Sports</p>
        </div>

        <div className='side-link'>
          <img
            src={assets.entertainment}
            alt='Home'
            className=''
          />
          <p className=''>Entertainment</p>
        </div>

        <div className='side-link'>
          <img
            src={assets.tech}
            alt='Home'
            className=''
          />
          <p className=''>Technology</p>
        </div>

        <div className='side-link'>
          <img
            src={assets.music}
            alt='Home'
            className=''
          />
          <p className=''>Music</p>
        </div>

        <div className='side-link'>
          <img
            src={assets.blogs}
            alt='Home'
            className=''
          />
          <p className=''>Blogs </p>
        </div>

        <div className='side-link'>
          <img
            src={assets.news}
            alt='Home'
            className=''
          />
          <p className=''>News </p>
        </div>
        <hr />
        <div className='subscribed-list'>
          <h3>Subscribed</h3>
          <div className='side-link'>
            <img
              src={assets.profile_icon}
              alt=''
            />
            <p>PewDiePie</p>
          </div>

          <div className='side-link'>
            <img
              src={assets.simon}
              alt='simon'
            />
            <p>MrBeast </p>
          </div>

          <div className='side-link'>
            <img
              src={assets.tom}
              alt='tom'
            />
            <p>Justin Bieber</p>
          </div>

          <div className='side-link'>
            <img
              src={assets.megan}
              alt='megan'
            />
            <p>5-Minute Crafts</p>
          </div>

          <div className='side-link'>
            <img
              src={assets.cameron}
              alt='cameron'
            />
            <p>Nas Daily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
