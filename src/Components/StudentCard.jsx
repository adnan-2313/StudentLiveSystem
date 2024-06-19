import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  width: 700px;
  background-color: #1e1e1e;
  display: flex;

  flex-direction: column;
  padding: 0px 0px 20px 0px;
  margin-bottom: 20px;
  /* Allow the card to expand vertically based on its content */
  max-width: 700px; /* Limit the maximum width of the card */
  word-wrap: break-word; /* Allow long texts to wrap within the card */
  @media (max-width: 742px) {
    width: 100%;
    border-radius: 0px;
  }
  @media (max-width: 667px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 563px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Cardbg = styled.div`
  position: relative;
  background: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAkq1F1Jv91R3CKq4KVcKHMaTIBKGbsWWGpDWPbol2TeCemoCd6utLcZIvw93qW7epAB_oDursXeka8_FaLzN87TPDmJn_ZvugL4LQ8zC2fOl3vBlB5cjhvS8Tspn7JPdbZkI8_WXlp9xsGcb7I2kjiEbu6UQmUGBQOacgpPFHEK3HIbQOpJ8d9ZXp3A/s1584/Linkedin%20Cover%20Photo%201.jpg);
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 180px;
  width: 700px;

  @media (max-width: 742px) {
    width: 100%;
    border-radius: 0px;
  }
  @media (max-width: 667px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 563px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 180px;
  left: 10px;
  top: 75px;
  @media (max-width: 742px) {
    width: 170px;
  }
  @media (max-width: 600px) {
    width: 150px;
    top: 95px;
  }
`;
const StudentDetailsContainer = styled.div`
  padding: 40px 0px 10px 0px;
  width: 100%;
  display: flex;

  flex-direction: row;
  gap: 40px;
  @media (max-width: 594px) {
    width: 80%;
    gap: 0px;
    flex-direction: column;
    padding-left: 10px;
    /* align-items: center; */
  }
`;
const StudentDetails = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  padding-left: 20px;

  @media (max-width: 667px) {
    gap: 3px;
    /* font-size: 13px; */
  }
  @media (max-width: 494px) {
    font-size: 14px;
  }
`;
const SocialContainer = styled.div`
  /* border: 2px solid white; */
  font-size: 12px;
  display: flex;
  width: 250px;

  flex-direction: column;

  @media (max-width: 594px) {
    margin-left: 20px;
  }
  @media (max-width: 540px) {
  }
`;
const Social = styled.div`
  display: flex;
  gap: 5px;
  color: #757575;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 563px) {
    gap: 20px;
    /* font-size: 13px; */
  }
`;
const SocialItem = styled.span`
  font-size: 13px;
  display: flex;

  justify-content: center;
  align-items: center;
  color: gray;
  @media (max-width: 594px) {
    justify-content: flex-start;
    /* font-size: 13px; */
  }
`;
const Logo = styled.span`
  font-size: 20px;

  position: relative;

  @media (max-width: 563px) {
    width: 10px;
  }
  &:hover {
    color: white;
  }
`;
const Name = styled.h2`
  font-size: 23px;
  color: white;
`;
const Department = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  color: white;
  flex-direction: column;

  justify-content: flex-start;
`;
const ProjectsCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 10px 0px 10px;
`;
const ProjectContainer = styled.div`
  width: 100%;
`;
const Projects = styled.div`
  color: white;
  width: 100%;
  border-bottom: 1px solid white;
  margin: 10px 0px 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: column; /* Changed to column */
  padding: 0px 0px 10px 20px;
  justify-content: flex-start;

  @media (max-width: 594px) {
    font-size: 14px;
  }
`;
const ProjectDeatilList = styled.ul`

`;
const ProjectDetailItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 563px) {
    flex-direction: column;
  }
`;
const Heading = styled.h2`
  font-size: 40px;
  text-decoration: underline;
  color: white;

  margin: 0px 20px 0px 30px;
  @media (max-width: 667px) {
    font-size: 25px;
  }
`;
const ProjectName = styled.h3`
  color: white;
`;
const ProjectDomain = styled.p`
  margin-left: 10px;
`;
const ProjectDes = styled.p`
  margin-left: 10px;
  color: white;
`;
const TechStack = styled.p`
  margin-left: 10px;
`;
const Date = styled.span`
  padding: 0px 20px;
  @media (max-width: 563px) {
    padding: 0px;
  }
`;

const StudentCard = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const { city, country, email, minor, name, reg_no, student_state, year } =
    state;
  console.log(reg_no);
  const [studentData, setStudentData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/student?reg_no=${reg_no}`
      );
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  useEffect(() => {
    if (reg_no) {
      // Ensure reg_no exists before fetching data
      fetchData();
    }
  }, [reg_no]);

  return (
    <>
      <CardContainer>
        <Card>
          <Cardbg>
            <Image>
              <img
                src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png"
                alt=""
              />
            </Image>
          </Cardbg>
          <StudentDetailsContainer>
            <StudentDetails>
              <Name>{name}</Name>

              <span>{minor}</span>
              <Department>Computer Science and Engineering</Department>

              <Details>
                <span>
                  <u>Address</u>: {city}, {student_state}, {country}
                </span>
                <span></span>
              </Details>
            </StudentDetails>
            <SocialContainer>
              <Social>
                <Logo>
                  <SiGmail />{" "}
                </Logo>
                <SocialItem>{email}</SocialItem>
              </Social>
              <Social>
                <Logo>
                  <FaLinkedin />{" "}
                </Logo>
                <SocialItem>
                  linkedin.com/{name.split(" ").join("_").toLowerCase()}
                </SocialItem>
              </Social>
            </SocialContainer>
          </StudentDetailsContainer>
        </Card>
        <Card>
          <ProjectsCard>
            <ProjectContainer>
              <Heading>Projects</Heading>
              {studentData &&
                Object.values(studentData).map((project, index) => (
                  <Projects key={index}>
                    <ProjectDeatilList>
                      <ProjectDetailItem>
                        <ProjectName>{project.project_name}</ProjectName>
                        <Date>({project.project_date})</Date>
                      </ProjectDetailItem>
                      <ProjectDomain>
                        Domain :{project.project_domain}
                      </ProjectDomain>
                      <TechStack>
                        {" "}
                        <b>Technologies Used: </b> {project.tech_used}
                      </TechStack>
                      <ProjectDes>{project.project_des}</ProjectDes>

                      {/* Add more project details as needed */}
                    </ProjectDeatilList>
                  </Projects>
                ))}
            </ProjectContainer>
          </ProjectsCard>
        </Card>
      </CardContainer>
    </>
  );
};

export default StudentCard;
