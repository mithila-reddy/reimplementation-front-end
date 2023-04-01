import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AssignmentForm from "./components/Assignments/AssignmentForm/AssignmentForm";
import Rubrics from "./components/Assignments/AssignmentForm/Rubrics";
import Assignments from "./components/Assignments/Assignments";
import Home from "./components/Layout/Home";
import RootLayout from "./components/Layout/Root";
import Users from "./components/Users/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "assignments", element: <Assignments /> },
        { path: "assignments/new", element: <AssignmentForm /> },
        { path: "assignments/card", element: <Rubrics /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
