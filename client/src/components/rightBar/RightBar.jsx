import "./rightBar.css";
import {Users } from "../dummyData.js";
import Online from "../onlineFriend/Online"

export default function RightBar({ profile }) {

  const HomeRightBar = () => {
    return(
      <> 
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"> 
            <b> Lenin </b> and <b> other 2 friends have birthday today. </b>
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightbarFriendTitle"> Online Friends</h4>

        <ul className="rightbarFriendList">
          { Users.map( u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City : </span>
            <span className="rightbarInfoValue">Chennai</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Job : </span>
            <span className="rightbarInfoValue">Software Developer</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship : </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>


        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"> Paul Walker</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightBar /> :  <HomeRightBar />}
        
      </div>
    </div>
  )
}
