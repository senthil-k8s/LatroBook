import "./topbar.css"
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';

export default function Topbar() {
  return (
    <div className='topBarContainer'>

        <div className="topbarLeft">
            <span className="logo">LatroTech</span>
        </div>

        <div className="topbarCentre">

          <div className="searchbar">

            <SearchIcon className="searchIcon" />
            <input placeholder='Find your Friends here' className="searchInput" />

          </div>

        </div>

        <div className="topbarRight">

          <div className="topBarLinks">

            <span className="topBarLink">HomePage</span>
            <span className="topBarLink">TimeLine</span>

          </div>

          <div className="topBarIcons">

            <div className="topBarIconItem">
              <PersonIcon />
              <span className="topBarIconBadge">1</span>
            </div>

            <div className="topBarIconItem">
              <ChatIcon />
              <span className="topBarIconBadge">1</span>
            </div>

            <div className="topBarIconItem">
              <CircleNotificationsIcon />
              <span className="topBarIconBadge">2</span>
            </div>

          </div>

          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>

    </div>
  )
}
