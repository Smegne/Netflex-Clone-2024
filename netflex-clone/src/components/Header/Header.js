import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='headr'>
        <div className='headr2'>
            <div className='headr3'>
                <ul>
                    <li><img src="netflix.jpg" width="100"/></li>
                    <li>Netflex</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='headr4'>
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon/></li>
                    <li> <AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header