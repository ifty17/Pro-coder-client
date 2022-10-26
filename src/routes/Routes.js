import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/courses",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>
      },
    ],
  },
]);