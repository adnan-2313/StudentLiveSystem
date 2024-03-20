// import React from 'react'
// import  'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap';
import Navbar from './Navbar'
import styled from 'styled-components';
import Footer from '../Footer'
import img from "../IMG1.png"
import { useTypewriter,Cursor} from 'react-simple-typewriter';
const MainHeader = () => {
  const [text] = useTypewriter({
    words:['LPU Student Live System'],
    loop:{},
  })
  // const [text2] = useTypewriter({
  //   words:['Connecting Engineers, Creating Opportunities'],
  //   loop:{},
  // })
  // const [text3] = useTypewriter({
  //   words:['Discover, Connect, Innovate'],
  //   loop:{},
  // })
 const Span = styled.span`
  font-family:'Poppins', sans-serif;
  display: flex;
  position: relative;
  width: 50%;
  font-size: 20px;
  top: 22px;
  justify-content: flex-end;
  align-items: center;
 `
 const  ImgContainer = styled.div`
  display:flex;
  margin-left: 800px;
  height:60vh;
  overflow:hidden;
  position: absolute;
  /* border: 2px solid white; */
  border-radius: 50%;
  /* box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2); */

 `
  const ButtonContainer = styled.div`
    display:flex;
    position: relative;
    top:50px;
    gap:10px;
    
    `
    const ColorSpan = styled.span`
      color:#520f15;
    `
  return (
    <>
     <Navbar></Navbar> 
     <section>
     <div className="home_head">
        <h1 className="typed">Welcome to <ColorSpan>{text}</ColorSpan><Cursor/></h1> 
        <h3 className="typed1">Connecting Engineers, Creating Opportunities</h3>
         <h4 className='typed1'><ColorSpan>Discover, Connect, Innovate</ColorSpan></h4>
         <Span>At LPU, we believe in fostering collaboration and innovation among our student community. 
        Our Student Live System is designed to connect students with diverse engineering minors, skills, 
        and projects, while also facilitating meaningful interactions with alumni and faculty.</Span>
        <ButtonContainer>
          <button>Click Me</button>
          <button>Click Me</button>
        </ButtonContainer>
        <ImgContainer>
          <img src={img} alt="" />
        </ImgContainer>
      </div>   

      <div className='para1'>
        
      </div>
      <div className="para2">
        <ul>
        <li>Students can create profiles showcasing their engineering minors, skills, and ongoing projects.</li>
        <li>Project Collaboration: Students can find and collaborate with others on various projects.</li>
        <li>Alumni Networking: Opportunities for students to connect with alumni for mentorship and networking.</li>
        <li>Faculty Interaction: Platform facilitates communication and engagement with faculty members.</li>
        </ul>
      </div>
      </section>
      <Footer></Footer>

      
       
    </>
  )
}

export default MainHeader
