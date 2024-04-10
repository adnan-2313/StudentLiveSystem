import styled from "styled-components";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const CardContainer = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  height: 100%;
  width: 100%;
  background: rgb(34,33,33);
  background: linear-gradient(90deg, rgba(34,33,33,1) 0%, rgba(36,31,31,1) 77%, rgba(51,48,48,1) 100%);
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 700px;
  background: #121111;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  margin-bottom: 20px; /* Add some bottom margin for spacing between cards */
  height: 380px; /* Allow the card to expand vertically based on its content */
  max-width: 700px; /* Limit the maximum width of the card */
  word-wrap: break-word; /* Allow long texts to wrap within the card */
  @media (max-width: 672px) {
    width: 400px;
  }
`;
const Card1 = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 700px;
  background: #121111;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  margin-bottom: 30px; /* Add some bottom margin for spacing between cards */
  padding-top: 30px;
  padding-bottom: 30px;
  height: inherit; 
  max-width: 700px; /* Limit the maximum width of the card */
  word-wrap: break-word; /* Allow long texts to wrap within the card */
  @media (max-width: 672px) {
    width: 400px;
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
  background-color: red;
`;

const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 180px;
  left: 10px;
  top: 75px;
`;



const StudentDetails = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  position: relative;
  left: 0px;
  top:38px;
  height: auto;
  width: 400px;
  padding-left: 20px;
  /* border: 2px solid white; */
  height: 100px;
  
`
const Social = styled.div`
  /* border: 2px solid white; */
  font-size: 12px;
  display: flex;
  width: 250px;
  flex-direction: column;
  position: absolute;
  left: 420px;
  top: -10px;
  
`
const Logo = styled.span`
  margin-right: 5px;
  position: relative;
  top: 8px;
`
const Name = styled.h3`
  font-size: 23px;
  /* color:#1b1b19; */
  width: 500px;
  position: absolute;
 
  
`;

const Details = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 150px;
  justify-content: flex-start;
`;

const Projects = styled.div`
  color: white;
  width: 500px;
  display: flex;
  flex-direction: column; /* Changed to column */
  position: relative;
  margin-left: 30px;
  justify-content: flex-start;
`;

const Span = styled.span`
  position: relative;
  top: 4px;
`;
const Heading = styled.h2`
  font-size: 30px;
  position: relative;
  color: white;
  margin: 0px 20px 0px 30px;
`
const Date = styled.span`
position: relative;
left:500px;
top: -28px;

`

const StudentCard = () => {
  const location = useLocation();
  const { state } = location;
  const { city,country,email,minor,name,reg_no,student_state,year } = state;
  console.log(reg_no)
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/student?reg_no=${reg_no}`);
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };


    if (reg_no) { // Ensure reg_no exists before fetching data
      fetchData();
    }
  }, [reg_no]);




  return (
    <>
      <Navbar />
      <CardContainer>
      <Card>
        <Cardbg>
          <Image>
            <img src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png" alt="" />
          </Image>
          </Cardbg>
          <StudentDetails>
          <Name>{name}</Name>
          <br/>
          <Span>{minor}</Span>
          <span>Computer Science and Engineering</span>
          <Social>
          <span>
          <Logo>
          <FaLinkedin style={{fontSize:"25px"}}/></Logo>linkedin.com/{name}
          </span>
          <span>
          <Logo>
          <SiGmail style={{fontSize:"25px"}} /></Logo>{email}
          </span>
          </Social>
          <Details>
          <span><u>Address</u>: {city}, {student_state}, {country}</span>
          <span></span>
          
          </Details>
          </StudentDetails>
        </Card> 
        <Card1>
        <Heading>Projects</Heading>
        <Projects>
          {studentData && Object.values(studentData).map(project => (
            <div key={project.project_name}>
            <ul>
              <li><h3>{project.project_name}</h3></li>
              <Date>{project.project_date}</Date>
              <p style={{position:"relative",left:"0px",top:"-25px"}}>({project.project_domain})</p>
              <p style={{position:"relative",left:"20px",top:"-25px"}}><i>{project.project_des}</i></p>
              <p style={{position:"relative",left:"20px",top:"-25px"}}><b>Technologies Used: </b>{project.tech_used}</p>
              {/* Add more project details as needed */}
            </ul>
      </div>
    ))}
  </Projects>
        </Card1>

        
      </CardContainer>
    </>
  );
};

export default StudentCard;
