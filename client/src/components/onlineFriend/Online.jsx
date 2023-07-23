
import "./online.css";

export default function onlineFriend({user}) {
  return (
    <li className="rightbarFriend">

        <div className="rightbarProfileContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>

        <span className="rightbarProfileUsername"> {user.username} </span>

    </li>
  )
}
