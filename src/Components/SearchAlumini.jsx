import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import "./Page.css";
// Sample company names, replace with the actual list you provided
const companies = [
  "Infosys Limited", "Tata Consultancy Services", "Hindustan Unilever Limited", "ICICI Bank", "Wipro Limited", 
  "Accenture", "IBM India", "Reliance Industries", "Amazon India", "HDFC Bank", "Microsoft India", "CRED", 
  "Razorpay", "Swiggy", "Ola Cabs", "Paytm", "BYJU'S", "Delhivery", "Digit Insurance", "Groww", "Meesho", 
  "Nykaa", "Udaan", "upGrad", "Boat", "Dream11", "Exponent Energy", "GoKwik", "OYO Rooms", "PharmEasy", 
  "Pine Labs", "Policybazaar.Com", "Sprinto", "Unacademy", "InMobi", "TCS", "MASAI SCHOOL", 
  "REAL TIME DATA SERVICES", "RNF TECHNOLOGIES", "RINEX TECHNOLOGIES", "AIRBUS", "HOTWAX SYSTEMS", 
  "IOCL INDIA OIL CORP LTD", "URBANPRO", "PRAMATA", "BHARATX", "PLANET SPARK", "CODING NINJAS", 
  "HIKE EDUCATION", "PATENTI TECHNOLOGY SOLUTIONS", "AVAINTERN", "SHYFTLABS", "CONTROLZ (UNDO WORLD PVT. LTD.)", 
  "MIDAS CONSULTING", "MINDSPARC", "GAMESKRAFT", "VISA2FLY", "STRIDEONE", "ABCDE TECHNOLOGIES PRIVATE LIMITED", 
  "REGISTERKARO", "UPGRAD EDUCATION PRIVATE LIMITED", "ASER CENTRE", "SUDARSHAN NEWS CHANNEL PVT LTD.", 
  "TYRESNMORE", "HYPERSPACE CONSULTING", "TOWER RESEARCH CAPITAL MARKETS INDIA PVT LTD", "JK CEMENTS", 
  "NEOTAS INDIA", "RUPEEK GOLD LOANS", "RMX GROUP", "RECIPTO", "PUSH SPORTS", "FLIPKART", "ANGELONE", 
  "GOOGLE INDIA", "YASHGROUP", "IDENSYS TECHNOLOGIES", "INTEGRATED RESOURCES INC", "OPRAAHFX", "TESLA", 
  "KPIT TECHNOLOGIES", "ELLAUNCH INFOTECH", "ZENSAR TECHNOLOGIES", "ERNET INDIA", "CDAC", "WIPRO", "INFOSYS", 
  "HCL TECHNOLOGIES", "TECH MAHINDRA", "CAPGEMINI", "IBM", "MICROSOFT", "GOOGLE", "AMAZON", "FACEBOOK", "APPLE", 
  "NETFLIX", "UBER", "AIRBNB", "SPOTIFY", "SNAPCHAT", "TWITTER", "LINKEDIN", "YOUTUBE", "TIKTOK", "WHATSAPP", 
  "INSTAGRAM", "GITHUB", "TWITCH", "DISCORD", "SLACK", "ZOOM", "SKYPE", "GMAIL", "OUTLOOK", "HOTMAIL", "YAHOO", 
  "MSN", "BING", "ASK", "WIKIPEDIA", "GOOGLE SEARCH", "YOUTUBE MUSIC"
];

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

const Div = styled.div`
background-color: #121212;
height: 100vh;
`

const SearchAlumni = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [alumniList, setAlumniList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem(selectedCompany);
    if (storedData) {
      setAlumniList(JSON.parse(storedData));
    } else if (selectedCompany) {
      const fetchAlumni = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(`http://127.0.0.1:5000/alumni?company=${encodeURIComponent(selectedCompany)}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          console.log('API Response:', data);

          const alumniArray = Object.keys(data).map(key => data[key]);

          setAlumniList(alumniArray);
          localStorage.setItem(selectedCompany, JSON.stringify(alumniArray));
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchAlumni();
    }
  }, [selectedCompany]);

  return (
    <>
      <Navbar />
      <Div>
        <Section>
          <Dropdown onChange={(e) => setSelectedCompany(e.target.value)} value={selectedCompany}>
            <option value="" disabled>Select a company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </Dropdown>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {Array.isArray(alumniList) && alumniList.length > 0 ? (
            <CardsContainer>
              {alumniList.map((alumni, index) => (
                <Card key={index}>
                  <CardImage src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png" alt="Profile" />
                  <CardContent>
                    <h2>{alumni.name}   <span>({alumni.year_of_placement})</span></h2>
                    <p>{alumni.position}</p>
                    <h3>{alumni.company}</h3>
                    <p>{alumni.email}</p>
                    <p>{alumni.linkedin}</p>
                  </CardContent>
                </Card>
              ))}
            </CardsContainer>
          ) : (
            !isLoading && <p>No alumni found</p>
          )}
        </Section>
      </Div>
    </>
  );
};

export default SearchAlumni;