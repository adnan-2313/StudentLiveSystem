import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import styled from "styled-components";
import img from "../../Utils/IMG1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import HomeFeatures from "./HomeFeatures";
const HomeContainer = styled.div`
  position: relative;
  display: flex;
  transition: 0.8s all ease;
  flex-direction: row;
  justify-content: center;
  //  align-items: center;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 90%, 0 100%);
  background-color: #121212;
  padding: 45px 30px;
  /* height: 500px; */
  width: 100%;

  color: white;
  text-shadow: 1px 1px black;
  @media screen and (max-width: 740px) {
    padding: 20px 15px;
  }
  @media screen and (max-width: 550px) {
    padding: 10px;
  }
  @media screen and (max-width: 440px) {
    /* padding-bottom: 0; */
    /* height: 380px; */
  }
`;

const LeftContainer = styled.div`
  display: flex;
  width: 60%;
  transition: 0.8s all ease;
  position: relative;
  flex-direction: column;
  @media screen and (max-width: 1090px) {
    justify-content: center;
    align-items: center;

    min-width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 740px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 612px) {
    justify-content: flex-start;
    padding-top: 30px;
  }
`;

const HeadingContainer = styled.div`
  font-size: 24px;
  transition: 0.8s all ease;
  @media screen and (max-width: 1090px) {
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 740px) {
    font-size: 21px;
  }
  @media screen and (max-width: 612px) {
    font-size: 18px;
  }
  @media screen and (max-width: 530px) {
    /* font-size: 15px; */
  }
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`;
const Head1 = styled.h1`
  gap: 10px;
  /* border: 1px solid white; */
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
  }
`;
const Head2 = styled.h3`
  display: flex;

  @media screen and (max-width: 530px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const Head3 = styled.h4`
  /* border: 1px solid white; */
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
  }
`;
const Para = styled.p`
  transition: 0.8s all ease;
  font-family: "Poppins", sans-serif;
  display: flex;
  position: relative;
  width: 80%;
  font-size: 18px;
  top: 22px;
  color: #757575;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 612px) {
    font-size: 16px;
  }
  @media screen and (max-width: 440px) {
    /* font-size: 12px; */
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
  /* border: 2px solid white; */
`;

const ButtonContainer = styled.div`
  display: flex;

  transition: 0.8s all ease;
  margin-top: 55px;
  margin-bottom: 15px;

  gap: 10px;
`;
const ColorSpan = styled.span`
  color: #520f15;
`;
const Button = styled.button`
  display: flex;
  transition: 0.8s all ease;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #520f15;
  border: none;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  width: 100px;
  padding: 20px 60px;
  font-size: 16px;
  height: 35px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 612px) {
    padding: 10px 30px;
    height: 30px;
    font-size: 14px;
  }
  @media screen and (max-width: 440px) {
    padding: 8px 33px;
    height: 30px;
    width: 90px;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    padding: 10px 33px;
    height: 24px;
    width: 72px;
    font-size: 9px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  transition: 0.8s all ease;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 400px;
  @media screen and(max-width:1080px) {
    display: none;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  transition: 0.8s all ease;
  height: 450px;
  width: 450px;
  border-radius: 50%;
  @media screen and (max-width: 1080px) {
    display: none;
    background-color: red;
  }
`;

const Img = styled.img`
  transition: 0.8s all ease;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const MainHeader = () => {
  // const data = useContext(AppContext);
  const [text] = useTypewriter({
    words: ["Student", "Live", "System"],
    loop: {},
  });

  useEffect(() => {
    ScrollReveal().reveal(".content-item", {
      origin: "top",
      distance: "20px",
      duration: 3000,
      delay: 300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
    ScrollReveal().reveal(".para", {
      origin: "top",
      distance: "20px",
      duration: 5000,
      delay: 430,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);

  const nav = useNavigate();

  return (
    <>
      <section>
        <HomeContainer>
          <LeftContainer>
            <HeadingContainer>
              <Head1 className="content-item">
                Welcome To <ColorSpan>LPU {text}</ColorSpan>
                <Cursor />
              </Head1>

              <Head2 className="content-item">
                Connecting Engineers, Creating Opportunities
              </Head2>
              <Head3 className="content-item">
                <ColorSpan>Discover, Connect, Innovate</ColorSpan>
              </Head3>
            </HeadingContainer>
            <Para className="para">
              At LPU, we believe in fostering collaboration and innovation among
              our student community. Our Student Live System is designed to
              connect students with diverse engineering minors, skills, and
              projects, while also facilitating meaningful interactions with
              alumni and faculty.
            </Para>
            <ButtonContainer className="para">
              <Button
                onClick={() => {
                  nav("/student");
                }}
              >
                Students
              </Button>
              <Button
                onClick={() => {
                  nav("/faculty");
                }}
              >
                Faculty
              </Button>
              <Button
                onClick={() => {
                  nav("/alumni");
                }}
              >
                Alumini
              </Button>
            </ButtonContainer>
          </LeftContainer>
          <RightContainer>
            <ImgContainer>
              <Img className="para" src={img} alt="" />
            </ImgContainer>
          </RightContainer>
        </HomeContainer>
        <HomeFeatures />
      </section>
    </>
  );
};

export default MainHeader;
