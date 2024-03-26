// import React from 'react'
import logo from "../logo.svg";
import styled from "styled-components";
import { NavLink,Router } from "react-router-dom";

import "./Navbar.css";
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
}
`;
const GitHubButton = styled.button`
  background-color: transparent;
  color:${({theme})=>theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  height: 70%;
  cursor: pointer;
  &:hover {
    transition: 0.8s;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Navbar = () => {
  return (
    
    
      <header className="header1">
      
      <div className="logo1">
        <img src={logo} alt=""  />
        </div>
        <nav className="navbar1">
        
            <ul className="nav_ul">
                <NavLink  className="link" to="/"><li className="nav_li">Home</li></NavLink>
                <NavLink  className="link" to="/searchfaculty"><li className="nav_li">Search Faculty</li></NavLink>
                <NavLink  className="link" to="/searchstudent"><li className="nav_li">Search Students</li></NavLink>
                <NavLink  className="link" to="/searchalumini"><li className="nav_li">Search Alumini</li></NavLink>
                {/* <NavLink className="link" to="/addprofile"><li className="nav_li">Profile</li></NavLink> */}
                {/* <NavLink className="link" to="/myprofile"><li className="nav_li">My Profile</li></NavLink> */}
                
            </ul>
            <ButtonContainer>
            <GitHubButton>Github Profile</GitHubButton>
          </ButtonContainer>
        </nav>
        <div className="logo2">
         
        </div>
      </header>
    
    
  )
}

export default Navbar
