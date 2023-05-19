import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../LayOuts/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
    ],
  },
]);
