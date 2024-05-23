import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #121212; /* Dark mode background */
  color: #ffffff; /* Text color */
  padding: 20px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Dropdown = styled.select`
  padding-left: 5px;
  background-color: #333; /* Dark mode background */
  color: white;
  margin: 15px 0px 10px 0px;
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0px 5px 15px black;
`;

const Option = styled.option`
  border: none;
  outline: none;
  border-radius: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  padding: 20px;
  background-color: #333; /* Dark mode background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  text-align: center;
`;

const MobileNumber = styled.p`
  margin-top: auto;
  text-align: center;
`;
const Div = styled.div`
  background-color: #121212;
  height: 100vh;
`
const SearchFaculty = () => {
  const [selection, setSelection] = useState({ department: '', domain: '' });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectionChange = (type, value) => {
    if (type === 'department') {
      setSelection({ department: value, domain: '' });
    } else if (type === 'domain') {
      setSelection({ department: '', domain: value });
    }
  };

  const fetchTeachers = async () => {
    try {
      const { department, domain } = selection;
      if (!department && !domain) {
        setSearchResults([]);
        return;
      }
      const searchParam = department || domain;
      setIsLoading(true);
      setError(null);
      const response = await fetch(`http://127.0.0.1:5000/teacher?dep_or_dom=${searchParam}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('API Response:', data);
      setSearchResults(Object.values(data));
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, [selection]);

  return (
    <>
      <Navbar />
      <Div>
      <Section>
        <Controls>
          <Dropdown
            value={selection.department}
            onChange={(e) => handleSelectionChange('department', e.target.value)}
          >
            <Option value="">Select Department</Option>
            <Option value="Computer Science">Computer Science</Option>
            <Option value="ECE">ECE</Option>
            <Option value="Others">Others</Option>
            <Option value="Others">Civil</Option>
            <Option value="Others">Electrical Engineering</Option>
            <Option value="Others">Mechanical Engineering</Option>
            

          </Dropdown>
          <Dropdown
            value={selection.domain}
            onChange={(e) => handleSelectionChange('domain', e.target.value)}
          >
            <Option value="">Select Domain</Option>
            <Option value="Machine Learning">Machine Learning</Option>
            <Option value="Data Science">Data Science</Option>
            <Option value="Cybersecurity">Cybersecurity</Option>
            <Option value="Transporation Engineering">Transportation Engineering</Option>
            <Option value="Control Systems Engineering">Control Systems Engineering</Option>
            <Option value="Manufacturing Engineering">Manufacturing Engineering</Option>
            <Option value="Signal Processing">Signal Processing</Option>
            <Option value="Environmental Engineering">Environmental Engineering</Option>
            <Option value="Renewable Energy Systems">Renewable Energy Systems</Option>
            <Option value="Thermodynamics and Heat Transfer">Thermodynamics and Heat Transfer</Option>
            <Option value="Wireless Communication">Wireless Communication</Option>
            <Option value="Structural Engineering">Structural Engineering</Option>
            <Option value="Power Systems Engineering">Power Systems Engineering</Option>
            <Option value="Embedded Systems">Embedded Systems</Option>
          </Dropdown>
        </Controls>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {searchResults.length === 0 && !isLoading && !error && <p>No results found</p>}
        <CardsContainer>
          {searchResults.map((teacher, index) => (
            <Card key={index}>
              <CardImage src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png" alt="Sample Image" />
              <CardContent>
                <h2>{teacher.name}</h2>
              <MobileNumber>{teacher.phone}</MobileNumber>
                <p>Email: {teacher.email}</p>
                <p>Department: {teacher.department}</p>
                <p>Domain: {teacher.domain}</p>
                <p>Qualification: {teacher.qualification}</p>
                <p>No. of Research Papers: {teacher.no_of_research_paper}</p>
                <p>No. of Students Guided: {teacher.no_of_students_guide}</p>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      </Section>
      </Div>
    </>
  );
};

export default SearchFaculty;
