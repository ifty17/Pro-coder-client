import React from "react";
import { useLoaderData } from "react-router-dom";
import CardCourses from "./CardCourses";

const Courses = () => {

    const cardCourses = useLoaderData();
    // console.log(cardCourses);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-20">
        {
            cardCourses.map(course => <CardCourses
            key={course.id}
            course={course}
            ></CardCourses>)
        }
    </div>
  );
};

export default Courses;
