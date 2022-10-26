import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Main from "../layouts/Main";

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
        loader: () => fetch('http://localhost:5000/courses'),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);