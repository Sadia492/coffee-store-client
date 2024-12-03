import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Update from "./components/Update.jsx";
import Details from "./components/Details.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-store-server-seven-rho.vercel.app/coffees"),
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRoute>
            <AddCoffee></AddCoffee>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://coffee-store-server-seven-rho.vercel.app/users"),
      },
      {
        path: "/coffees/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-seven-rho.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/coffees/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-seven-rho.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
