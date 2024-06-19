import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  );
};
export default App;
