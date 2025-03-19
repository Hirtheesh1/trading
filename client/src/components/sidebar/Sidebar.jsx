import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <span className="sidebarlistitemtext">Home</span>
            </li>
            <li className="sidebarlistitem">
              <span className="sidebarlistitemtext">Stocks</span>
            </li>
            <li className="sidebarlistitem">
              <span className="sidebarlistitemtext">Owned Stocks</span>
            </li>
            <li className="sidebarlistitem">
              {/* <School className="sidebaricon"/> */}
              <span className="sidebarlistitemtext">Settings</span>
            </li>
          </ul>
          <button className="sidebarbutton">Show More</button>
          <hr className="sidebarhr"/>
          <ul className="sidebarfriendlist">
          </ul>
        </div>
    </div>
  )
}
