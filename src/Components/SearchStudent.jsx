import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
const Section = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background: rgb(34, 33, 33);
  background: linear-gradient(
    90deg,
    rgba(34, 33, 33, 1) 0%,
    rgba(36, 31, 31, 1) 77%,
    rgba(51, 48, 48, 1) 100%
  );
  
`;

const Table = styled.table`
  width: 90%;
  background-color: #403d3d;
  backdrop-filter: blur();
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
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
  color: #e2b842;
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
  background-color: aliceblue;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const SearchContainer = styled.div`

  width: 100%;
  height: 150px;
  /* background-color: #323232; */
  /* border:1px solid white; */
  overflow: hidden;
  margin-top: 30px;
  background-image: url("../self-pattern.svg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;
const Search = styled.div`
  backdrop-filter: blur();
  top: 30px;
  position: absolute;
  left: 450px;
  border-radius: 10px;
  background: transparent;

  display: flex;
  align-items: center;
`;

const NotFound = styled.p`
  text-align: center;
  font-weight: bold;
`;

const SectionTable = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  background: rgb(34, 33, 33);
  background: linear-gradient(
    90deg,
    rgba(34, 33, 33, 1) 0%,
    rgba(36, 31, 31, 1) 77%,
    rgba(51, 48, 48, 1) 100%
  );
`;
const Tbody = styled.tbody`
  transition: background 0.25s ease;
  &:hover {
    background: #014055;
  }
`;
const TableCellClickable = styled.td`
  color: #fff;
  font-weight: 400;
  padding: 0.65em 1em;
  cursor: pointer; /* Add cursor pointer to indicate clickability */
`;

const FilterContainer = styled.div`
  position: absolute;
  top: 85px;
  left: 400px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  color: white; 
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const ProjectTable = ({ projects }) => {
  const navigate = useNavigate();
  // Initialize useNavigate hook
  const goto = (project) => {
    console.log(project);
    navigate("/card", {
      state: {
        city: project.city,
        country: project.country,
        email: project.email,
        linkedin: project.linkedin,
        minor: project.minor,
        name: project.name,
        project_date:project.project_date,
        project_des:project.project_des,
        project_domain: project.project_domain,
        project_name: project.project_name,
        reg_no:project.reg_no,
        student_state: project.state,
        tech_used:project.tech_used,
        year:project.year
      },
    }); // Navigate to the project detail page
  };

  return (
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
              {/* Make the TableCellClickable and pass the project to the goto function */}
              <TableCellClickable onClick={() => goto(project)}>
                {project.name}
              </TableCellClickable>
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
};

const SearchBar = () => {
  const [filterOption, setFilterOption] = useState("Name");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    
    // Retrieve search results from local storage on component mount
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  useEffect(() => {
    // Save search results to local storage whenever it changes
    if (searchResults) {
      localStorage.setItem("searchResults", JSON.stringify(searchResults));
    }
  }, [searchResults]);
  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Don't search if the search term is empty or only contains whitespace
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/projects?project_des=${searchTerm}`
      );
      const data = await response.json();
      if (Object.keys(data).length === 0) {
        setNotFound(true);
        setSearchResults(null);
      } else {
        setSearchResults(data);
        setNotFound(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
    console.log("Filtering by:", filterOption);
  };
 

  return (
    <>
    <Navbar/>
    
    <Section>
      
        <Search>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter project description"
            autoComplete="on"
          />
          <Button
            onClick={handleSearch}
            sx={{
              width: "60px",
              height: "50px",
              fontSize: "30px",
              backgroundColor: "#0a0a0a",
              color: "white",
              borderRadius: "0px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                transform: "scale(1.025)",
                backgroundColor: "#0a0a0a",
              },
            }}
          >
            <CiSearch />
          </Button>
        </Search>
        {/* <FilterContainer>
          <FilterLabel>
            <RadioButton
              type="radio"
              name="filter"
              value="Machine Learning"
              checked={filterOption === "Name"}
              onChange={() => setFilterOption("Name")}
            />
            Machine learning
          </FilterLabel>
          <FilterLabel>
            <RadioButton
              type="radio"
              name="filter"
              value="Full Stack"
              checked={filterOption === "Registration Number"}
              onChange={() => setFilterOption("Registration Number")}
            />
            Full Stack
          </FilterLabel>
          <FilterLabel>
            <RadioButton
              type="radio"
              name="filter"
              value="Data Science"
              checked={filterOption === "Registration Number"}
              onChange={() => setFilterOption("Registration Number")}
            />
            Data Science
          </FilterLabel>
          <FilterLabel>
            <RadioButton
              type="radio"
              name="filter"
              value="Cyber Secuity"
              checked={filterOption === "Registration Number"}
              onChange={() => setFilterOption("Registration Number")}
            />
            Cyber Secuity
          </FilterLabel>
          {/* Add more radio buttons for other filter options */}
        {/* </FilterContainer> */} 
      
      <SectionTable>
        {notFound ? (
          <NotFound>No results found</NotFound>
        ) : (
          searchResults && <ProjectTable projects={searchResults} />
        )}
      </SectionTable>
    </Section>
    
    </>
  );
};

export default SearchBar;
