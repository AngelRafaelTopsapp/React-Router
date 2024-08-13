import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  HashRouter,
} from "react-router-dom";

import Home from "./src/routes/Home.jsx";
import Contact from "./src/routes/Contact.jsx";
import ErrorPage from "./src/routes/ErrorPage.jsx";
import ContactDetails from "./src/routes/ContactDetails.jsx";
import Video from "./src/routes/VideoModal.jsx";

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
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>
);
