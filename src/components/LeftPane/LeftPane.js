import React from 'react';
import "./leftPane.css";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">

        <div className="leftPaneMenu">

           <li className="leftPaneMenuItem">
              <MarkUnreadChatAltIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Messages</span>
           </li>

           <li className="leftPaneMenuItem">
              <GroupIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Group</span>
           </li>

           <li className="leftPaneMenuItem">
              <RssFeedIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Feed</span>
           </li>

           <li className="leftPaneMenuItem">
              <FlagIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Flag</span>
           </li>

           <li className="leftPaneMenuItem">
              <CalendarMonthIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Events</span>
           </li>

           <li className="leftPaneMenuItem">
              <BuildIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Settings</span>
           </li>

           <li className="leftPaneMenuItem">
              <SportsEsportsIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Games</span>
           </li>

           <li className="leftPaneMenuItem">
              <NewspaperIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">News</span>
           </li>

           <li className="leftPaneMenuItem">
              <WorkOutlineIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Job</span>
           </li>

           <li className="leftPaneMenuItem">
              <AddShoppingCartIcon className="leftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Market</span>
           </li>
           <hr/>

           <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
           </div>

           <div className="pageList">
           <li className="pageListItem">
                <img src="./images/1.jpg" alt="" className="pagePic" />
                <span className="pageName">Code with Jayashan</span>
           </li>
           <li className="pageListItem">
                <img src="./images/1.jpg" alt="" className="pagePic" />
                <span className="pageName">Code with Jayashan</span>
            </li>
            <li className="pageListItem">
                <img src="./images/1.jpg" alt="" className="pagePic" />
                <span className="pageName">Code with Jayashan</span>
            </li>
            <li className="pageListItem">
                <img src="./images/1.jpg" alt="" className="pagePic" />
                <span className="pageName">Code with Jayashan</span>
            </li>
            <li className="pageListItem">
                <img src="./images/1.jpg" alt="" className="pagePic" />
                <span className="pageName">Code with Jayashan</span>
            </li>
           </div>
            
        </div>
      </div>
    </div>
  )
}
