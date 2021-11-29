import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import  "./Home.css"

function Home() {
    return(
        <>
        <Navbar/>
        <div className="homeContainer">
            <SideBar/>
            <Feed/>
            <RightBar/>
        </div>
        
        </>

    );
}

export default Home