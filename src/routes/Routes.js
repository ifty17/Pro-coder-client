import { createBrowserRouter } from "react-router-dom";

import Blogs from "../components/Blogs/Blogs";
import CheckOut from "../components/CheckOut/CheckOut";
import Courses from "../components/Courses/Courses";
import Details from "../components/Details/Details";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import Error from "../Others/Error";
import Terms from "../Others/Terms";
import Login from "../SignUp/Login";
import Register from "../SignUp/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://assignment10-server-ifty17.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://assignment10-server-ifty17.vercel.app/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment10-server-ifty17.vercel.app/checkout/${params.id}`),
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
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
]);
