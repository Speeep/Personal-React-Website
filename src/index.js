import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Mit from "./pages/Mit";
import Robot from "./pages/Robot";
import Portfolio from "./pages/Portfolio";
import BWSI from "./pages/BWSI";
import Slam from "./pages/Slam";
import RBE2001 from "./pages/RBE2001";

import ErrorPage from "./pages/ErrorPage";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
              {
                path: "/",
                element: <Home />
              },
              {
                path: "projects",
                element: <Projects />
              },
              {
                path: "about",
                element: <About />
              },
              {
                path: "contact",
                element: <Contact />
              },
              {
                path: "mitllinternship",
                element: <Mit />
              },
              {
                path: "roboticsortingsystem",
                element: <Robot />
              },
              {
                path: "portfoliowebsite",
                element: <Portfolio />
              },
              {
                path: "mitbwsi",
                element: <BWSI />
              },
              {
                path: "slampathplanning",
                element: <Slam />
              },
              {
                path: "rbe2001finalproject",
                element: <RBE2001 />
              }
        ]
    }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);