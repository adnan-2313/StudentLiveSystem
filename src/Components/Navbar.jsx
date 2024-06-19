import logo from "../../Utils/logo.svg";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import "../index.css";
import { useState } from "react";

const Header = styled.div`
  display: flex;
  position: relative;
  top: 0;
  background-color: #1f1f1f;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  flex-direction: row;
  height: 100px;

  width: 100%;
  position: sticky;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 100%;
  }
  @media screen and (max-width: 530px) {
    height: 80px;
  }
  @media screen and (max-width: 440px) {
    height: 65px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  margin-left: 50px;
  padding: 15px;

  @media screen and (max-width: 666px) {
    margin-left: 10px;
    padding: 13px;
  }
  @media screen and (max-width: 530px) {
    margin-left: 15px;
    padding: 12px;
  }
  @media screen and (max-width: 440px) {
    margin-left: 4px;
    padding: 10px;
  }
  > img {
    filter: drop-shadow(2px, 2px, 2px, grey);
    opacity: 1;
    height: 140px;
    @media screen and (max-width: 612px) {
      height: 130px;
    }
    @media screen and (max-width: 530px) {
      height: 116px;
    }
    @media screen and (max-width: 440px) {
      height: 90px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  background-color: #1f1f1f;
  width: 100%;
  align-items: center;

  justify-content: space-between;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 869px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;
  max-width: 1800px;
  width: 60%;
  color: white;
  list-style: none;
  margin-left: 20px;
  gap: 60px;
  font-weight: bold;
  @media screen and (max-width: 1056px) {
    width: 80%;
  }
  @media screen and (max-width: 869px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media screen and (min-width: 870px) {
    display: none;
  }
  @media screen and (max-width: 869px) {
    transition-duration: 1s;

    transition: ease-in-out;
    display: flex;

    justify-content: flex-end;
    color: #ffffff;
    cursor: pointer;
    padding: 20px 40px;
    font-size: 40px;
  }
  @media screen and (max-width: 612px) {
    font-size: 35px;
    padding: 20px 30px;
  }
  @media screen and (max-width: 440px) {
    font-size: 25px;
    padding: 20px 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: #7e2e34;
  }
`;

const List = styled.li`
  gap: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2px;
  &:hover {
    transition: 0.2s;
    color: #7e2e34;
  }
`;

const MobileNavList = styled.ul`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;

  left: ${({ isopen }) => (isopen ? "0" : "-100%")};
  width: 30%;
  height: 100vh;

  overflow: hidden;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  background-color: rgba(31, 31, 31, 1);
  color: white;
  list-style: none;

  transition: 0.6s ease;
  z-index: 9;
  @media screen and (max-width: 869px) {
    display: flex;
  }
`;

const MobileNavItem = styled.li`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px 20px;
  width: 200px;
  font-size: 15px;
  &:hover {
    transition: 0.2s;
    color: #7e2e34;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;
const MobileNavLogo = styled.div`
  height: 120px;
  width: 130px;
  top: 0;
  @media screen and (max-width: 500px) {
    height: 100px;
    width: 110px;
  }
  @media screen and (max-width: 392px) {
    height: 80px;
    width: 90px;
  }

  /* border: 1px solid white; */
`;

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(true);
  const toggleMenu = () => {
    setMenuBar(!menuBar);
  };

  return (
    <Header>
      <Nav>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
        <MobileMenu onClick={toggleMenu}>
          {menuBar ? <FaBars /> : <MdClose />}
        </MobileMenu>
        <NavList>
          <StyledNavLink to="/" className="nav_link">
            <List>
              <AiFillHome style={{ fontSize: "30px" }} />
              <span>Home</span>
            </List>
          </StyledNavLink>
          <StyledNavLink to="/student" className="nav_link">
            <List>
              <IoPersonSharp style={{ fontSize: "25px" }} />
              Student
            </List>
          </StyledNavLink>
          <StyledNavLink to="/faculty" className="nav_link">
            <List>
              <FaChalkboardTeacher style={{ fontSize: "30px" }} />
              Faculty
            </List>
          </StyledNavLink>
          <StyledNavLink to="/alumni" className="nav_link">
            <List>
              <PiStudent style={{ fontSize: "30px" }} />
              Alumni
            </List>
          </StyledNavLink>
        </NavList>

        <MobileNavList isopen={!menuBar}>
          <MobileNavLogo>
            <img src={logo} alt="" />
          </MobileNavLogo>
          <StyledNavLink to="/">
            <MobileNavItem>
              <AiFillHome style={{ fontSize: "30px" }} />
              Home
            </MobileNavItem>
          </StyledNavLink>
          <StyledNavLink to="/student" className="nav_link">
            <MobileNavItem>
              <IoPersonSharp style={{ fontSize: "25px" }} />
              Student
            </MobileNavItem>
          </StyledNavLink>
          <StyledNavLink to="/faculty" className="nav_link">
            <MobileNavItem>
              <FaChalkboardTeacher style={{ fontSize: "30px" }} />
              Faculty
            </MobileNavItem>
          </StyledNavLink>
          <StyledNavLink to="/alumni" className="nav_link">
            <MobileNavItem>
              <PiStudent style={{ fontSize: "30px" }} />
              Alumni
            </MobileNavItem>
          </StyledNavLink>
        </MobileNavList>
      </Nav>
    </Header>
  );
};

export default Navbar;
