import "./topbar.css"
import { Search, Person, Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer"> 
      <div className="topbarLeft">
        <spam className="logo">Trading</spam>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="search"/>
          <input
            placeholder="Search for Stocks"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">OwnedStocks</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
        <img src="/assets/profile/img1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>

  )
}
