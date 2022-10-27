import { createBrowserRouter } from "react-router-dom";

import Blogs from "../components/Blogs/Blogs";
import CheckOut from "../components/CheckOut/CheckOut";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import Login from "../SignUp/Login";
import Register from "../SignUp/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses/:id",
        element: (
            <CheckOut></CheckOut>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
    ],
  },
]);
