import ScrollReveal from 'scrollreveal'
import { useContext,useEffect } from 'react';
import Navbar from './Navbar'
import styled from 'styled-components';
import Footer from '../Footer'
import img from "../IMG1.png"
import { useTypewriter,Cursor} from 'react-simple-typewriter';
import { AppContext } from './Context';
const MainHeader = () => {
  
  const [text] = useTypewriter({
    words:['LPU Student Live System'],
    loop:{},
  })
 
    useEffect(() => {
      ScrollReveal().reveal('.content-item', {
        origin: 'top',
        distance: '20px',
        duration: 2000,
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });
      ScrollReveal().reveal('.para', {
        origin: 'right',
        distance: '20px',
        duration: 2000,
        delay: 330,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });
    }, []);
    
  
 const Span = styled.span`
  font-family:'Poppins', sans-serif;
  display: flex;
  position: relative;
  width: 580px;
  font-size: 20px;
  top: 22px;
  justify-content: center;
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
    const Button = styled.button`
    background-color: #520f15;
    border:none;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    width:100px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    `
    const data = useContext(AppContext);
  return (
    <>
     <Navbar></Navbar> 
     <section   className='home1'>
     <div className="home_head">
        <h1   className="typed content-item">{data} <ColorSpan>{text}</ColorSpan><Cursor/></h1> 
        <h3    className="typed content-item">Connecting Engineers, Creating Opportunities</h3>
         <h4  className='typed1 content-item'><ColorSpan>Discover, Connect, Innovate</ColorSpan></h4>
         <Span className='para'>At LPU, we believe in fostering collaboration and innovation among our student community. 
        Our Student Live System is designed to connect students with diverse engineering minors, skills, 
        and projects, while also facilitating meaningful interactions with alumni and faculty.</Span>
        <ButtonContainer>
          <Button>Students</Button>
          <Button>Faculty</Button>
          <Button>Alumini</Button>
        </ButtonContainer>
        <ImgContainer >
          <img className='para' src={img} alt="" />
        </ImgContainer>
      </div>   

      <div className='para1'>
        
      </div>
      <div className="para2">
        <ul>
        <li className='para'>Students can create profiles showcasing their engineering minors, skills, and ongoing projects.</li>
        <li className='para'>Project Collaboration: Students can find and collaborate with others on various projects.</li>
        <li className='para'>Alumni Networking: Opportunities for students to connect with alumni for mentorship and networking.</li>
        <li className='para'>Faculty Interaction: Platform facilitates communication and engagement with faculty members.</li>
        </ul>
      </div>
      </section>
      <Footer></Footer>

      
       
    </>
  )
}

export default MainHeader
