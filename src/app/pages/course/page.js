import React from "react";
import CourseCard from "./CourseCard";
import { courseVideos } from "./courses.data";

const CoursePage = () => {
  return (
    <div className="mt-10">
      <h4
        className="text-center font-bold text-2xl 
      "
      >
        HTML Videos
      </h4>
      <CourseCard courseVideos={courseVideos} />
    </div>
  );
};

export default CoursePage;
