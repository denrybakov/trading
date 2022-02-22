import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Link } from 'react-router-dom';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header = () => {
  const [activeLink, setActiveLink] = useState('trading');

  const linkHandler = (e) => {
    setActiveLink(e.target.dataset.active)
  }

  return (
    <header className='header'>
      <Link
        to='/trading'
        className={`header__link ${activeLink === 'trading' ? 'header__link--active' : null}`}
        data-active='trading'
        onClick={linkHandler}
      >
        Trading
      </Link>
      <Link
        to='/archive'
        className={`header__link ${activeLink === 'archive' ? 'header__link--active' : null}`}
        data-active='archive'
        onClick={linkHandler}
      >
        Archive
      </Link>
    </header>
  );
}

export default Header
