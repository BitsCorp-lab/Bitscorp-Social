import "./online.css"
function Online(post){
    
    return(
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={post.post.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> {post.post.username}</span>
    </li>
    )
}

export default Online