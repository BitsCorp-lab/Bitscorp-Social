import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";


function Post(post) {
    const [like, setLike] = useState(post.post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={post.post.profilePicture} className="postProfileImg" alt="" />
                        <span className="postUsername">{post.post.username}</span>
                        <span className="postDate">{post.post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.post?.desc}</span>
                    <img className="postImg" src={post.post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post