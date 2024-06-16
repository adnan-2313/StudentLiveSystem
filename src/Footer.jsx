import styled from "styled-components";
const FooterContainer = styled.footer`
  display: flex;
`;
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Footer1>
        <h1>{`Copyright©️ ${year}`}</h1>
      </Footer1>
    </>
  );
};

export default Footer;
