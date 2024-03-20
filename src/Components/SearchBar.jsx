import  { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import styled from 'styled-components';
import studentDetailsAPI from './studentDetailsAPI'; // Importing API data from file

const Section=styled.section`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  

`
const Table = styled.table`
  background-color: rgba(0,0,0,0.2);
  /* backdrop-filter: blur(); */
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 2px 0px 2px 2px rgba(0,0,0,0.2);
  width: 70%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  background-color: #4caf50;
  color: white;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  &:hover{
    cursor: pointer;
    border: 2px solid red;
    transform: scale(1.1);
  }
`;

const StudentTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = Object.values(studentDetailsAPI).filter(student =>
    searchTerm === '' || student.project_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const Search = styled.div`
  display: flex;


  `
  const Input = styled.input`
      // background-color: transparent;
      backdrop-filter: blur(10px);
      display :flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      position: relative;
      top:50px;
      margin-left: 500px;
      min-height: 50px;
      min-width: 350px;
      border: none;
      outline: none;
      border-bottom-left-radius:10px;
      border-top-left-radius:10px;
      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
  `
  const Button = styled.button`
    display: flex;
    display :flex;
    justify-content: center;
      align-items: center;
      position: relative;
      top:50px;
      /* margin-left: 500px; */
      min-height: 50px;
      min-width: 50px;
      font-size: 20px;
      border: none;
      outline: none;
      border-bottom-right-radius:10px;
      border-top-right-radius:10px;
      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
  `

  return (
    <div>
    <Search>
      <Input
        type="text"
        name="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      ></Input>
      <Button><CiSearch/></Button>
    </Search>
      <Section>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Project Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>LinkedIn</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <TableRow key={student.reg_no}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.project_name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>
                <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      </Section>
    </div>
  );
};

export default StudentTable;
