import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTachometerAlt, FaBriefcase, FaBell, FaStickyNote, 
  FaGavel, FaUpload, FaCogs, FaUsers, FaKey 
} from "react-icons/fa";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/portfolio"><FaBriefcase /> Portfolio</Link></li>
        <li><Link to="/notifications"><FaBell /> Notifications</Link></li>
        <li><Link to="/notices"><FaStickyNote /> Notices</Link></li>
        <li><Link to="/auction"><FaGavel /> Auction</Link></li>
        <li><Link to="/data-upload"><FaUpload /> Data Upload</Link></li>
        <li><Link to="/control-panel"><FaCogs /> Control Panel</Link></li>
        <li><Link to="/users"><FaUsers /> User Management</Link></li>
        <li><Link to="/permissions"><FaKey /> Permissions</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
