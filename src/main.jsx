import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import SearchStudent from "./Components/SearchStudent";
import SearchFaculty from "./Components/SearchFaculty";
import SearchAlumni from "./Components/SearchAlumni";
import StudentCard from "./Components/StudentCard";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/student",
        element: <SearchStudent />,
      },
      {
        path: "/faculty",
        element: <SearchFaculty />,
      },
      {
        path: "/alumni",
        element: <SearchAlumni />,
      },
      {
        path: "/card",
        element: <StudentCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
