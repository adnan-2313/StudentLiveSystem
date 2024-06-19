import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../index.css";
import { Card, CardContent, CardImage, Cardbg } from "./ProfileCard";

const Section = styled.section`
  display: flex;
  position: relative;

  flex-direction: column;
  align-items: center;
 
  background-color: #121212;
  padding: 20px;
`;

const Table = styled.table`
  position: relative;
  width: 100%;
  background-color: #1f1f1f;
  
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  border-collapse: collapse;
  margin: 1em;
  @media screen and (max-width: 692px) {
    max-width: 50%;
    min-width: 70%;
  }
`;

const TableRow = styled.tr`
  cursor: pointer;

  &:nth-child(even) {
    background-color: #0f0f0f;
  }
  /* &:hover {
    background-color: grey;
  } */
`;
const TableHead = styled.thead`
  background: #0a0909;
  border-radius: 0.25em;
  border-collapse: collapse;
  /* margin: 1em; */
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
  font-size: 0.938rem;
  @media screen and (max-width: 1140px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 710px) {
    font-size: 0.75rem;
    padding: 10px 5px;
  }
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  padding: 10px;
  min-width: 350px;
  font-size: 14px;
  height: 50px;
  background-color: aliceblue;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  @media screen and (max-width: 534px) {
    min-width: 300px;
    width: 300px;
    height: 45px;
    font-size: 13px;
  }
  @media screen and (max-width: 395px) {
    min-width: 200px;
    width: 250px;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  /* background-color: #323232; */

  
  margin: 15px 0px 10px 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 534px) {
    min-width: 80%;
  }
`;
const Search = styled.div`
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  top: 30px;
  border-radius: 10px;
  background: transparent;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 50px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 30px;
  color: white;
  background-color: black;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  height: 51px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;
const NotFound = styled.p`
  text-align: center;
  font-weight: bold;
`;

const SectionTable = styled.div`
  display: flex;
  
  
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  max-width: 100%;
  min-height: 100%;
  /* overflow: scroll; */
  @media screen and (max-width: 710px) {
    max-width: 90%;
    min-height: 90%;
  }
  @media screen and (max-width: 692px) {
    display: none;
  }
`;
const Tbody = styled.tbody`
  transition: 0.25s ease;
  /* &:hover {
    background: #014055;
  } */
`;
const TableCellClickable = styled.td`
  color: #fff;

  font-weight: 400;
  padding: 2em 3em;
  cursor: pointer; /* Add cursor pointer to indicate clickability */
`;
const CardsContainer = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
    border: 1px solid red;
  }
  @media screen and (max-width: 692px) {
    display: flex;
    margin: 40px 0px 20px 0px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    color: white;
  }
`;
const ProfileLink = styled.button`
  /* box-shadow: 0px -2px 10px rgba(0, 0, 0, 1); */
  width: 100px;
  border: none;
  height: 30px;
  border: 2px solid #7e2e34;
  color: #7e2e34;
  background-color: transparent;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
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
        project_date: project.project_date,
        project_des: project.project_des,
        project_domain: project.project_domain,
        project_name: project.project_name,
        reg_no: project.reg_no,
        student_state: project.state,
        tech_used: project.tech_used,
        year: project.year,
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
            <TableRow key={key} onClick={() => goto(project)}>
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
const StudentProfileCard = ({ projects }) => {
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
        project_date: project.project_date,
        project_des: project.project_des,
        project_domain: project.project_domain,
        project_name: project.project_name,
        reg_no: project.reg_no,
        student_state: project.state,
        tech_used: project.tech_used,
        year: project.year,
      },
    }); // Navigate to the project detail page
  };
  return (
    <>
      {Object.keys(projects).map((key) => {
        const project = projects[key];
        return (
          <Card key={key}>
            <Cardbg></Cardbg>
            <CardImage
              src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png"
              alt="Sample Image"
            />
            <CardContent>
              {/* Make the TableCellClickable and pass the project to the goto function */}
              <h2>{project.name}</h2>
              <h4>Registration Number :{project.reg_no}</h4>
              <p>Email: {project.email}</p>
              <p>Project: {project.project_name}</p>
              <p>Domain: {project.project_domain}</p>
              <p>
                <ProfileLink onClick={() => goto(project)}>
                  View Profile
                </ProfileLink>
              </p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
const SearchBar = () => {
  const [filterOption, setFilterOption] = useState("Name");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Retrieve search results from local storage on component mount
    // const storedResults = localStorage.getItem("searchResults");
    // if (storedResults) {
    //   setSearchResults(JSON.parse(storedResults));
    // }
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
      <Section>
        <SearchContainer>
          <Search>
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter project name"
              autoComplete="on"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
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
        </SearchContainer>
        <SectionTable>
          {notFound ? (
            <NotFound>No results found</NotFound>
          ) : (
            searchResults && <ProjectTable projects={searchResults} />
          )}
        </SectionTable>
        <CardsContainer>
          {notFound ? (
            <NotFound>No results found</NotFound>
          ) : (
            searchResults && <StudentProfileCard projects={searchResults} />
          )}
        </CardsContainer>
      </Section>
    </>
  );
};

export default SearchBar;
