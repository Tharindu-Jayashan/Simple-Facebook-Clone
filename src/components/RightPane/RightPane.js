import React from 'react';
import "./rightPane.css";

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">

        <div className="adContainer">
            <span className="sponsered">Sponsered</span>
            <img src="/images/ad.jpg" alt="" className="adImage" />
            <span className="adText">Order Your Food with Bnchi Food delivery Service. we can deliver food in to your door step witin in second</span>
        </div>
        <div className="birthdayContainer">
             <img src="/images/birthday.jpg" alt="" className="birthdayImage" />
             <span className="birthdayText"><b>Shehera De Silva</b> and <b>2 ohters</b> birthday today..!</span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
                <div className="onlinefriendImageContainer">
                 <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
                 <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Bald John Siriwdhana</span>
          </li>
          <li className="onlineFriend">
                <div className="onlinefriendImageContainer">
                 <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
                 <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Bald John Siriwdhana</span>
          </li>
          <li className="onlineFriend">
                <div className="onlinefriendImageContainer">
                 <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
                 <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Bald John Siriwdhana</span>
          </li>
          <li className="onlineFriend">
                <div className="onlinefriendImageContainer">
                 <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
                 <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Bald John Siriwdhana</span>
          </li>
          <li className="onlineFriend">
                <div className="onlinefriendImageContainer">
                 <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
                 <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Bald John Siriwdhana</span>
          </li>
        </div>
      </div>
    </div>
  )
}
