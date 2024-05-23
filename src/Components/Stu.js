import styled from "styled-components";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  height: 100vh;
  width: 100%;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 700px;
  background: rgb(34,33,33);
  /* background: linear-gradient(90deg, rgba(34,33,33,1) 0%, rgba(36,31,31,1) 77%, rgba(51,48,48,1) 100%); */
  background: radial-gradient(
    circle,
    rgb(30,30,30) 10%,
    rgb(30,31,32) 70%,
    rgb(31,36,35)83%
  );
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  margin-bottom: 20px; /* Add some bottom margin for spacing between cards */
  height: 400px; /* Allow the card to expand vertically based on its content */
  max-width: 700px; /* Limit the maximum width of the card */
  word-wrap: break-word; /* Allow long texts to wrap within the card */
  
  @media (max-width: 672px) {
    width: 400px;
  }
`;

const Cardbg = styled.div`
  position: relative;
  background: url(https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg);
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
  height: 150px;
  width: 150px;
  left: 20px;
  top: 100px;
`;



const StudentDetails = styled.img`
  display: flex;
  justify-content: center;
  position: relative;
`
const Name = styled.div`
  color:white;
  width: 500px;
  display: flex;
  position: absolute;
  margin-top: 220px;
  margin-left: 35px;
  justify-content: flex-start;
`;

const Details = styled.div`
  color:white;
  width: 500px;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 230px;
  margin-bottom: 150px;
  margin-left: 35px;
  justify-content: flex-start;
`;

const Projects = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column; /* Changed to column */
  position: relative;
  margin-left: 30px;
  justify-content: flex-start;
`;

const Span = styled.span`
  margin-left: 5px;
`;

const StudentCard = () => {
  const location = useLocation();
  const { state } = location;
  const { city,country,email,linkedin,minor,name,project_date,project_des,project_domain,project_name,reg_no,student_state,tech_used,year } = state;

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

  console.log(studentData);


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
          <Name>
            <h3>{name}</h3>
          </Name>
          
          <br />
          <Details>
            <p style={{ marginTop: "10px",marginBottom:"10px" }}>
              Computer Science and Engineering <span style={{ fontWeight: "bold" }}>(4th Year)</span>
            </p>
            {/* <span style={{ fontWeight: "lightest", fontSize: "13px" }}>{email}</span> */}
          </Details>
          <Details>
            {/* <span style={{ fontWeight: "lightest", fontSize: "13px",marginTop:"25px" }}>{linkedin}</span> */}
          </Details>
          </StudentDetails>
        </Card>
       
         

        
      </CardContainer>
    </>
  );
};

export default StudentCard;
