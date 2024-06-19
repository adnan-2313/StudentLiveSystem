import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  width: 320px;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
   /* Add some bottom margin for spacing between cards */
  /* height: 380px; Allow the card to expand vertically based on its content */
  max-width: 700px; /* Limit the maximum width of the card */
  word-wrap: break-word; /* Allow long texts to wrap within the card */
  
  /* align-items: center; */
`;
const Cardbg = styled.div`
  position: relative;
  background: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAkq1F1Jv91R3CKq4KVcKHMaTIBKGbsWWGpDWPbol2TeCemoCd6utLcZIvw93qW7epAB_oDursXeka8_FaLzN87TPDmJn_ZvugL4LQ8zC2fOl3vBlB5cjhvS8Tspn7JPdbZkI8_WXlp9xsGcb7I2kjiEbu6UQmUGBQOacgpPFHEK3HIbQOpJ8d9ZXp3A/s1584/Linkedin%20Cover%20Photo%201.jpg);
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 100px;
  width: 100%;
  background-color: red;
`;
const CardImage = styled.img`
  width: 220px;
  position: absolute;
  height: 200px;
  border-radius: 50%;
  margin-left:50px ;
  margin-bottom: 10px;
  margin-top: 0px;
`;

const CardContent = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  
  padding:80px 20px 10px 20px;
`;

const MobileNumber = styled.p`
  margin-top: auto;
  /* text-align: center; */
`;

const ProfileCard = (props) => {
  const {
    name,
    phone,
    email,
    department,
    domain,
    qualification,
    no_of_research_paper,
    no_of_students_guide,
  } = props?.Data;

  return (
    <>
      <Card>
        <Cardbg />
        <CardImage
          src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png"
          alt="Sample Image"
        />
        <CardContent>
          <h2>{name}</h2>
          <MobileNumber>{phone}</MobileNumber>
          <p>Email: {email}</p>
          <p>Department: {department}</p>
          <p>Domain: {domain}</p>
          <p>Qualification: {qualification}</p>
          <p>No. of Research Papers: {no_of_research_paper}</p>
          <p>No. of Students Guided: {no_of_students_guide}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileCard;
export { Card,Cardbg ,CardContent, CardImage, MobileNumber };
