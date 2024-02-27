// import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import { useTypewriter,Cursor} from 'react-simple-typewriter';
const MainHeader = () => {
  const [text] = useTypewriter({
    words:['LPU Student Live System'],
    loop:{},
  })
  const [text2] = useTypewriter({
    words:['Connecting Engineers, Creating Opportunities'],
    loop:{},
  })
  const [text3] = useTypewriter({
    words:['Discover, Connect, Innovate'],
    loop:{},
  })
 
  return (
    <>
     <Navbar></Navbar> 
     <section>
     <div className="home_head">
        <h1 className="typed">Welcome to {text}<Cursor/></h1> 
        <h3 className="typed1">{text2}</h3>
         <h4 className='typed1'>{text3}</h4>
      </div>    
      <div className='para1'>
        <span>At LPU, we believe in fostering collaboration and innovation among our student community. 
        Our Student Live System is designed to connect students with diverse engineering minors, skills, 
        and projects, while also facilitating meaningful interactions with alumni and faculty.</span>
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
