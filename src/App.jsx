import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { ContactUs } from "./screens/ContactUs";
import { FrameScreen } from "./screens/FrameScreen/FrameScreen";
import { OurServicesMain } from "./screens/OurServicesMain/OurServicesMain";
import { OurServicesMedia } from "./screens/OurServicesMedia/OurServicesMedia";
import { OurServicesScreen } from "./screens/OurServicesScreen/OurServicesScreen";
import { OurServicesWebApp } from "./screens/OurServicesWebApp/OurServicesWebApp";
import { OurWork } from "./screens/OurWork/OurWork";
import { Screen6 } from "./screens/Screen6/Screen6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrameScreen />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/frame-6",
    element: <FrameScreen />,
  },
  {
    path: "/our-work",
    element: <OurWork />,
  },
  {
    path: "/our-services-u45-marketing",
    element: <OurServicesScreen />,
  },
  {
    path: "/our-services-u45-web-u38-app",
    element: <OurServicesWebApp />,
  },
  {
    path: "/our-services-u45-media-production",
    element: <OurServicesMedia />,
  },
  {
    path: "/our-services-u45-branding",
    element: <Screen6 />,
  },
  {
    path: "/our-services-u45-main",
    element: <OurServicesMain />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "*",
    element: <FrameScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
