import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';
const Section = styled.section`
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: rgb(34,33,33);
  background: linear-gradient(90deg, rgba(34,33,33,1) 0%, rgba(36,31,31,1) 77%, rgba(51,48,48,1) 100%);
`;

const Table = styled.table`
  
  width: 90%;
  background-color: #403d3d;
  backdrop-filter: blur();
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
  border-collapse: collapse;
  margin: 1em;
  
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    
    background-color: #0f0f0f;
  }
  &:hover {
    background-color: grey;
  }
  `;
  const TableHead = styled.thead`
    
    background: #0a0909;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
  `;

const TableHeader = styled.th`
  
  border-bottom: 1px solid #364043;
  color: #E2B842;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
`;

const TableCell = styled.td`
  color: #fff;
  font-weight: 400;
  padding: 0.65em 1em;
`;

const Input = styled.input`
  backdrop-filter: blur(10px);
  padding: 10px;
  min-width: 350px;
  font-size: 18px;
  height: 50px;
  background-color:aliceblue;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Button1 = styled.button`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 50px;
  border: none;
  outline: none;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  

  background:transparent;
  color: white;
  cursor: pointer;
`;

const Search = styled.div`
  backdrop-filter: blur();
  top: 30px;
  
  border-radius: 10px;
  background: transparent;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  align-items: center;
`;

const NotFound = styled.p`
  text-align: center;
  font-weight: bold;
`;

const SectionTable = styled.div`
  margin-top:100px;
  display: flex;
  justify-content: center;
  margin-bottom:100px;
  background: rgb(34,33,33);
  background: linear-gradient(90deg, rgba(34,33,33,1) 0%, rgba(36,31,31,1) 77%, rgba(51,48,48,1) 100%);
`
const Tbody = styled.tbody`

  transition: background 0.25s ease;
  &:hover{
    background: #014055;
  }
`;


const ProjectTable = ({ projects }) => (
  <Table>
   <TableHead>
      <TableRow>
        <TableHeader>Name</TableHeader>
        <TableHeader>Registration Number</TableHeader>
        <TableHeader>Email</TableHeader>
        <TableHeader>Project Name</TableHeader>
        <TableHeader>Domain</TableHeader>
      </TableRow>
    </TableHead>
    <Tbody>
      {Object.keys(projects).map((key) => {
        const project = projects[key];
        return (
          <TableRow key={key}>
            <TableCell>
                {project.name}
            </TableCell>
            <TableCell>{project.reg_no}</TableCell>
            <TableCell>{project.email}</TableCell>
            <TableCell>{project.project_name}</TableCell>
            <TableCell>{project.project_domain}</TableCell>
          </TableRow>
        );
      })}
    </Tbody>
  </Table>
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Don't search if the search term is empty or only contains whitespace
    try {
      const response = await fetch(`http://127.0.0.1:5000/projects?project_des=${searchTerm}`);
      const data = await response.json();
      if (Object.keys(data).length === 0) {
        setNotFound(true);
        setSearchResults(null);
      } else {
        setSearchResults(data);
        setNotFound(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Section>
      <Search>
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter project description"
          autocomplete="on"
        />
      <Button  onClick={handleSearch} sx={{width: "60px",height:"50px",fontSize:"30px",color:"white",borderRadius:"10px"}}><CiSearch/></Button>
      </Search>
      <SectionTable>
      {notFound ? <NotFound>No results found</NotFound> : searchResults && <ProjectTable projects={searchResults} />}
      </SectionTable>
    </Section>
  );
};

export default SearchBar;
