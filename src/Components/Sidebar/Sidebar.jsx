/** @format */

import { assets } from '../../assets/assets';
import './Sidebar.css';

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className='shortcut-links'>
        <div
          className={`side-link ${category === 0 ? 'active' : ''}`}
          onClick={() => setCategory(0)}
        >
          <img
            src={assets.home}
            alt='Home'
            className=''
          />
          <p className=''>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? 'active' : ''}`}
          onClick={() => setCategory(20)}
        >
          <img
            src={assets.game_icon}
            alt='Gaming Image'
            className=''
          />
          <p className=''>Gaming</p>
        </div>

        <div
          className={`side-link ${category === 2 ? 'active' : ''}`}
          onClick={() => setCategory(2)}
        >
          <img
            src={assets.automobiles}
            alt='Automobiles Image'
            className=''
          />
          <p className=''>Automobiles</p>
        </div>

        <div
          className={`side-link ${category === 17 ? 'active' : ''}`}
          onClick={() => setCategory(17)}
        >
          <img
            src={assets.sports}
            alt='Sport Image'
            className=''
          />
          <p className=''>Sports</p>
        </div>

        <div
          className={`side-link ${category === 24 ? 'active' : ''}`}
          onClick={() => setCategory(24)}
        >
          <img
            src={assets.entertainment}
            alt='Entertainment Image'
            className=''
          />
          <p className=''>Entertainment</p>
        </div>

        <div
          className={`side-link ${category === 28 ? 'active' : ''}`}
          onClick={() => setCategory(28)}
        >
          <img
            src={assets.tech}
            alt='Technology Image'
            className=''
          />
          <p className=''>Technology</p>
        </div>

        <div
          className={`side-link ${category === 10 ? 'active' : ''}`}
          onClick={() => setCategory(10)}
        >
          <img
            src={assets.music}
            alt='Music Image'
            className=''
          />
          <p className=''>Music</p>
        </div>

        <div
          className={`side-link ${category === 22 ? 'active' : ''}`}
          onClick={() => setCategory(22)}
        >
          <img
            src={assets.blogs}
            alt='Blogs Image'
            className=''
          />
          <p className=''>Blogs </p>
        </div>

        <div
          className={`side-link ${category === 25 ? 'active' : ''}`}
          onClick={() => setCategory(25)}
        >
          <img
            src={assets.news}
            alt='News Image'
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
              alt='Profile Image'
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
