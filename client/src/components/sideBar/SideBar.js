import "./sideBar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkIcon from '@mui/icons-material/Work';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EventIcon from '@mui/icons-material/Event';
import { Users } from "../dummyData.js";
import CloseFriend from "../closeFriend/CloseFriend";


export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sideWrapper">
          <ul className="sidebarList">

            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Feed</span>
            </li>

            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Chats</span>
            </li>

            <li className="sidebarListItem">
              <PlayCircleIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Videos</span>
            </li>

            <li className="sidebarListItem">
              <GroupsIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Groups</span>
            </li>

            <li className="sidebarListItem">
              <BookmarkIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Bookmarks</span>
            </li>

            <li className="sidebarListItem">
              <WorkIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Job</span>
            </li>

            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Events</span>
            </li>

            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon"/>
              <span className="sidebarListItemtext">Market</span>
            </li>
          </ul>

          <button className="sidebarButton">Show more</button>
          <hr className="sidebarhr" />

          <ul className="sidebarFriendList">
            {Users.map( u => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>

        </div>
    </div>
  )
}
