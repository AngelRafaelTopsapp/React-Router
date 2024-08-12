import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
import Video from "./routes/VideoModal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "video",
        element: <Video />,
      },
      
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },

      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
