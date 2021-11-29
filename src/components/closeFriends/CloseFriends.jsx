import "./closeFriends.css"

function closeFriends(post){
    return(
        <li className="sidebarFriend">
        <img src={post.post.profilePicture} alt="" className="sidebarFriendImage" />
        <span className="sidebarFriendName">{post.post.username} </span>
    </li> 
    )
}

export default closeFriends