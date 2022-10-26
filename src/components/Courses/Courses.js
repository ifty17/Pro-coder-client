import React from "react";
import { useLoaderData } from "react-router-dom";
import CardCourses from "./CardCourses";

const Courses = () => {

    const cardCourses = useLoaderData();
    console.log(cardCourses);

  return (
    <div className="grid grid-cols-3 p-5 gap-4">
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
