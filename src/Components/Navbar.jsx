// import React from 'react'
import logo from "../logo1.png";
import { NavLink } from "react-router-dom";
import logo2 from "../lpu_logo.png";
const Navbar = () => {
  return (
    <>
      <header className="header1">
      <div className="logo1">
        <img src={logo} alt="/" />
      </div>
        <nav className="navbar1">
            <ul className="nav_ul">
                <NavLink style = {{active:"red"}} className="link" to="/"><li className="nav_li">Home</li></NavLink>
                <NavLink className="link" to="/searchfaculty"><li className="nav_li">Search Faculty</li></NavLink>
                <NavLink className="link" to="/searchstudent"><li className="nav_li">Search Students</li></NavLink>
                <NavLink className="link" to="/searchalumini"><li className="nav_li">Search Alumini</li></NavLink>
                {/* <NavLink className="link" to="/myprofile"><li className="nav_li">My Profile</li></NavLink> */}
                
            </ul>
        </nav>
        <div className="logo2">
         <img src={logo2} alt=""  />
        </div>
      </header>
    </>
  )
}

export default Navbar
