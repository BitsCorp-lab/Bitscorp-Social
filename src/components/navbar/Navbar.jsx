import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
    return(
         <div className="topbarContainer">
             <div className="topbarLeft">
                <span className="logo">BitsCorp Social</span>
             </div>
             <div className="topbarCenter">
                 <div className="searchBar">
                     <SearchIcon className="searchIcon"/>
                     <input placeholder="Search for friends, post, or video" className="searchInput" />
                 </div>
             </div>
             <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconsItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconsItem">
                        <ChatBubbleIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconsItem">
                        <NotificationsIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
             </div>
        </div>
    );
}

export default Navbar