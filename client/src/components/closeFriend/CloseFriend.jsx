import "./closefriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImage" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
