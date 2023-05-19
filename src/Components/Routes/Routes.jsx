import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../LayOuts/Home/Home";
import ErrorPage from "../LayOuts/ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import AddToy from "../Pages/Add Toy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetailss/ToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("category.json"),
      },
    ],
  },
]);
