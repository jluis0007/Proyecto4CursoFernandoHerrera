import { createBrowserRouter, Navigate } from "react-router";

import { AboutPages } from "../pages/about/AboutPages";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPages />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
