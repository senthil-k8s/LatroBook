import "./home.css";
import React from 'react'
import RightBar from '../../components/rightBar/RightBar'
import Feed from '../../components/feed/Feed'
import SideBar from '../../components/sideBar/SideBar'
import Topbar from '../../components/topBar/Topbar'


export default function Home() {
  return ( 
  <>
    <Topbar />
    <div className='homeContainer'>
      <SideBar />
      <Feed />
      <RightBar />
    </div>
  </>
  )
}
