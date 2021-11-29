import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import "./profile.css"

function Profile() {
    return(
        <>
        <Navbar/>
        <div className="profile">
            <SideBar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">John Son</h4>
                        <span className="profileInfoDesc">hello is i am John Son</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <RightBar profile/>
                </div>

            </div>

        </div>
        </>
    )
}
export default Profile