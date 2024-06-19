import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
const FooterContainer = styled.footer`
  display: flex;
  bottom: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  position: relative;
  margin-top: 50px;
  justify-content: space-between;
  background-color: #1f1f1f;
  align-items: center;
  padding: 10px 60px;
  padding: 10px 60px;

  gap: 20px;
  color: #9ca3af;
  font-size: 20px;
  @media screen and (max-width: 546px) {
    font-size: 16px;
    justify-content: center;
    gap: 5px;
    align-items: center;
    flex-direction: column;
    padding: 0px 40px;
  }
  @media screen and (max-width: 368px) {
    font-size: 16px;
    padding: 0px 10px;
    border: 1px solid white;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Header = styled.h4`
  margin-right: 20px;
`;
const Span = styled.span`
  border-left: 2px solid white;
  display: flex;
  height: 80%;
  padding: 0px 15px;
  justify-content: flex-start;
  align-items: center;
`;
const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #9ca3af;
`;
const IconLink = styled.a`
  color: #9ca3af;
`;
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <FooterContainer>
        <DetailsContainer>
          <Header>Rohit Kumar</Header>
          <Span>{`Copyright©️ ${year}`}</Span>
        </DetailsContainer>
        <IconsContainer>
          <IconLink
            href="https://github.com/Rohit2289868?tab=repositories"
            target="_github"
          >
            <FaGithub />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/rohitkumar1504/"
            target="_github"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink
            href="https://medium.com/@DataJourney_Rohit"
            target="_github"
          >
            <FaMedium />
          </IconLink>
        </IconsContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
