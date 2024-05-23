import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchStudent from './Components/SearchStudent';
import SearchFaculty from './Components/SearchFaculty';
import SearchAlumini from './Components/SearchAlumini';
// import Header from './Components/Header';
import StudentCard from './Components/StudentCard';
const App = () => {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/searchstudent" element={<SearchStudent/>}/> 
          <Route path="/searchfaculty" element={<SearchFaculty/>}/> 
          <Route path="/searchalumini" element={<SearchAlumini/>}/> 
          {/* <Route path="/myprofile" element={<SearchAlumini/>}/>  */}
          <Route path="/card" element={<StudentCard/>}/> 
        </Routes>
      </BrowserRouter>
      
    
    </>
  )
}

export default App
