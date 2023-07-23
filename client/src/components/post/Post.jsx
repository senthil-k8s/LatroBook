import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users } from "../dummyData.js";
import {useState} from "react";

export default function  Post({post}) {
    const[like,setLike] = useState(post.like);
    const[isLike, setisLiked] = useState(false);
    const likeHandler = ()=> {
        setLike( isLike ? like-1 : like+1);
        setisLiked(!isLike);
    }


  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className="VertIcon"/>
                </div>
            </div>
            <div className="postCentre">
                <span className="postText"> {post.desc}</span>
                <img src={post.photo} className="postCentreImg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
                    <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} People Liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComments">{post.comment} Comments</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}
