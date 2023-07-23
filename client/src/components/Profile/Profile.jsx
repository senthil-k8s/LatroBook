import "./profile.css";
import RightBar from '../../components/rightBar/RightBar'
import Feed from '../../components/feed/Feed'
import SideBar from '../../components/sideBar/SideBar'
import Topbar from '../../components/topBar/Topbar'

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <SideBar />
            <div className="profileRight">
                <div className="profileRightTop">

                    <div className="profileCover">
                        <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="/assets/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>

                    <div className="profileInfo">
                        <h4 className="profileUserName">No Name</h4>
                        <span className="profileUserdesc">....Hey Buddies....</span>
                    </div>

                    
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <RightBar />
                </div>
            </div>
        </div>
        
        
  
  </>
  )
}
