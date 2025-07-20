import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ProfilesPage from "./ProfilesPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // component: HomePage,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
