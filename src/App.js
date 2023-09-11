import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import ErrorPage from "./ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
