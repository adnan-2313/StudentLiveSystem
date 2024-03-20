import styled from "styled-components"
import Navbar from "./Navbar"

const CardContainer  = styled.div`
    /* position: relative; */

    bottom: 100px;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 5px;
    height: 100vh;
    width: 100%;
`
const Card = styled.div`
    
    border-radius: 10px;
  
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    height: inherit;
    width: 700px;
    background: rgb(223,235,225);
    background: radial-gradient(circle, rgba(223,235,225,1) 10%, rgba(241,247,242,0.9948354341736695) 70%, rgba(244,247,245,0.9668242296918768) 83%);
    display: flex;
    flex-direction: row;
    @media  (max-width: 672px){
        width:400px;
    }
    
` 

const Image = styled.div`
    position: relative;
    display: flex;
    height: 150px;
    width: 150px;
    left:20px;
    top:20px;
`
const Img = styled.img`
    
`
const Name = styled.div`
    width:500px;
    /* border: 2px solid red; */
    display: flex;
    
    position: absolute;
    margin-top:160px;
    margin-left: 30px;
    justify-content: flex-start;
`
const Details = styled.div`
    width:500px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top:180px;
    margin-left: 30px;
    justify-content: flex-start;
`
const Projects = styled.div`
    width:500px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    position: absolute;
    margin-top:230px;
    margin-left: 30px;
    justify-content: flex-start;

`
const Skills = styled.div`
    width:500px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    position: absolute;
    margin-top:275px;
    margin-left: 30px;
    justify-content: flex-start;
    

`
const Span = styled.span`
  margin-left: 5px;
`

const StudentCard = () => {

  return (
    <>
      <Navbar></Navbar>
      <CardContainer>
      <Card>
      <Image>
      <Img src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png" alt="" />
      </Image>
      <Name>
        <h3>Ram Prakash</h3>
      </Name>
      <br />
      <Details>
        <p style={{marginTop:"0px"}}>Computer Science and Engineering <span style={{fontWeight:"bold"}}>(4th Year)</span></p>
        <span style={{fontWeight:"lightest", fontSize:"13px"}}>Shahjahanpur Uttar Pradesh</span>
      </Details>
      <Projects>
        <h4>Projects:</h4>
        <Span>  NewsKeedaApp <b>Domain</b> Web Dev(Front End) ReactJs, BootStrap </Span>
      </Projects>
      <Skills>
          <h4>Skills:</h4>
          <Span>FrontEnd,</Span>
          <Span>Machine Learning</Span>
      </Skills>
      </Card>
      <Card></Card>
      </CardContainer>
    </>
  )
}

export default StudentCard
