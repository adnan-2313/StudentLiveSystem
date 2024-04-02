import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { useLocation } from 'react-router-dom'
const SearchStudent = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>

        <Navbar></Navbar>
        <SearchBar holder="Students"/>
    </>
  )
}

export default SearchStudent
