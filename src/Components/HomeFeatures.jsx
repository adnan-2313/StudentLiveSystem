import { Featureconstant } from "./FeaturesList";
import { RiDoubleQuotesR } from "react-icons/ri";
import styled from "styled-components";
const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding-bottom: 100px;
  color: white;
  font-size: 20px;
  background: rgb(37, 7, 7);

  box-shadow: 0px 1px 1px 1px rgb(41, 40, 40);
`;
const FeaturesHeading = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  font-size: 30px;
  padding: 10px 0px 40px 0px;
  color: white;
`;
const FeaturesList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  /* align-items: center; */
  position: relative;
  gap: 20px;
  transition: 0.2s ease-in-out;
`;
const FeatureItem = styled.li`
  display: flex;
  /* border-radius: 10px; */
  flex-direction: column;
  transition: 0.2s ease-in-out;
  /* justify-content: center;
  align-items: center; */
  width: 23%;

  background-color: rgb(71, 12, 12);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
    -webkit-box-shadow: 0px 0px 30px 1px rgba(173, 21, 21, 0.57);
    -moz-box-shadow: 0px 0px 30px 1px rgba(173, 21, 21, 0.57);
    box-shadow: 0px 0px 30px 1px rgba(173, 21, 21, 0.57);
  }
  &:not(hover) {
    transition: 0.2s ease-in-out;
    /* transform:scale(1.01) ; */
  }
  @media screen and (max-width: 898px) {
    width: 35%;
  }
  @media screen and (max-width: 612px) {
    width: 45%;
  }
  @media screen and (max-width: 532px) {
    width: 65%;
  }
  @media screen and (max-width: 440px) {
    width: 85%;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Heading = styled.h4`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  color: white;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  padding: 20px;
  font-size: 16px;
  color: #9ca3af;
  @media screen and (max-width: 1090px) {
    font-size: 14px;
  }
`;
const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  width: 100%;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;
  background-color: #121212;
  color: white;
  font-size: 30px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;
const FeedbackItemList = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;

  width: 100%;
  justify-content: center;
`;
const FeedbackItem = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background-color: rgba(31, 31, 31, 0.6);
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
  font-size: 16px;
  padding: 2rem;
  height: 100%;
  color: #9ca3af;
  @media screen and (max-width: 898px) {
    width: 60%;
  }
  @media screen and (max-width: 690px) {
    width: 80%;
  }
  @media screen and (max-width: 580px) {
    width: 85%;
  }
  @media screen and (max-width: 512px) {
    width: 90%;
    font-size: 15px;
  }
  @media screen and (max-width: 440px) {
    font-size: 13px;
  }
  /* justify-content: center; */
  /* align-items: center; */
`;
const HomeFeatures = () => {
  return (
    <>
      <FeaturesContainer>
        <FeaturesHeading>Salient Features</FeaturesHeading>
        <FeaturesList>
          {Featureconstant.map((value) => {
            return (
              <FeatureItem key={value.id}>
                <Img src={value.url} alt="" />
                <Info>
                  <Heading>{value.Heading}</Heading>
                  {value.Description}
                </Info>
              </FeatureItem>
            );
          })}
        </FeaturesList>
      </FeaturesContainer>
      <FeedbackContainer>
        <FeaturesHeading>Testimonials</FeaturesHeading>
        <FeedbackItemList>
          <FeedbackItem>
            <RiDoubleQuotesR style={{ fontSize: "30px", color: "white" }} />
            This platform has revolutionized our connectivity with students and
            alumni. It's user-friendly and efficient, making cross-department
            collaboration seamless. A remarkable tool for academic and
            professional networking
            <span style={{ color: "white" }}>
              Manish Katoch <br />
              LPU Faculty
            </span>
          </FeedbackItem>
          <FeedbackItem>
            <RiDoubleQuotesR style={{ fontSize: "30px", color: "white" }} />
            Quickly searching students by projects and alumni by companies is a
            game-changer. It enhances our engagement within the LPU community,
            fostering a collaborative environment. Highly recommend it.
            <span style={{ color: "white" }}>
              Pranjal <br /> LPU Faculty
            </span>
          </FeedbackItem>
        </FeedbackItemList>
      </FeedbackContainer>
    </>
  );
};

export default HomeFeatures;
