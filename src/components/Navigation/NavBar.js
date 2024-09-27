import React from 'react';
import './navBar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';


export default function NavBar() {
    
  return (
    <div className="navBarBox">

        <div className="navBarLeft">
            <span className="logo">fakebook</span>
        </div>

        <div className="navBarCenter">
            <div className="searchBarBox">
               <SearchIcon className="searchIcon"/>
               <input className="searchInput" type="search" placeholder="search for your friend" />
            </div>
        </div>

        <div className="navBarRight">

            <div className="navBarLinks">
                <span className="navBarLink">HomePage</span>
                <span className="navBarLink">Profile</span>
            </div>

            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonOutlineIcon/>
                    <span className="iconTag">3</span>
                </div>
                <div className="navBarIcon">
                    <MessageIcon/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                    <span className="iconTag">2</span>
                </div>
            </div>

            <div className="pic">
                <img src="/images/IMGTharindu.jpeg" alt="" className="profilePicImg" />
            </div>
        </div>
    </div>
  )
}
