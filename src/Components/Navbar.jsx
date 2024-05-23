// import React from 'react'
import logo from "../logo.svg";
import styled from "styled-components";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, Router } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";

const Nav = styled.div`
  background-color: #323232;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1rem;
  /* position: sticky; */
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    background-color: red;
    transition: 0.8 all ease;
    width: 100%;
  }
`;
const ButtonContainer = styled.div`
  font-weight: 500;
  position: relative;
  display: flex;
  margin: 20px 30px 0px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 50px;
  
  &:hover{
    transition: 0.5s;
    transform: scale(1.1);
  }
  &:not(hover){
    transition: 0.5s;
   
  }
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button`
  background-color: transparent;
  color: #520f15;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  width: 150px;
  cursor: pointer;
  &:hover {
    transition: 0.8s;
    background-color: #520f15;
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
// const Button = styled.button`
//   position: relative;
//   display: flex;
//   background: transparent;
//   justify-content: center;
//   align-items: center;

//   height: 35px;
//   width: 100px;
//   border: 1px solid white;
//   border-radius: 10px;
//   color: white;
//   cursor: pointer;
// `;
const Navbar = () => {
  return (
    <header className="header1">
      <div className="logo1">
        <img src={logo} alt="" />
      </div>
      <Nav className="navbar1">
        <ul className="nav_ul">
          <NavLink className="link" to="/">
            <li className="nav_li">
              <AiFillHome style={{ fontSize: "25px" }} />
            </li>
          </NavLink>
          <NavLink className="link" to="/searchfaculty">
            <li className="nav_li">Search Faculty</li>
          </NavLink>
          <NavLink className="link" to="/searchstudent">
            <li className="nav_li">Search Students</li>
          </NavLink>
          <NavLink className="link" to="/searchalumini">
            <li className="nav_li">Search Alumini</li>
          </NavLink>
          {/* <NavLink className="link" to="/addprofile"><li className="nav_li"><Button>Profile</Button></li></NavLink> */}
          {/* <NavLink className="link" to="/myprofile"><li className="nav_li">My Profile</li></NavLink> */}
        </ul>
      </Nav>
      {/* <ButtonContainer>
      <MdAccountCircle style={{color:"white"}}/><span  style={{fontSize:"20px",marginLeft:"5px"}}>Profile</span>
      </ButtonContainer> */}
       
      
    </header>
  );
};

export default Navbar;
