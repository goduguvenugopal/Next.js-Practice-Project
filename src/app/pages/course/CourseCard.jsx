"use client";

import React, { useEffect, useState } from "react";

const CourseCard = ({ courseVideos }) => {
  const [vid, setVid] = useState({});

  const playVideo = (vidId) => {
    const res = courseVideos.find((item) => item.id === vidId);
    setVid(res);
  };

  useEffect(() => {
    setVid(courseVideos[0]);
  }, [courseVideos]);

  return (
    <div className="mt-10 p-5 flex gap-5 flex-wrap">
      {/* course video iframe section  */}
      <div className=" w-full lg:w-[60%]  shadow  ">
        <iframe
          className="w-full h-56 lg:min-h-80 rounded-2xl"
          src={vid.embedUrl}
          title={vid.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/* side bar  */}
      <div className="border-2 border-bl h-80 w-full lg:w-[30%] py-5  overflow-auto flex flex-col gap-5 items-center rounded-2xl px-2">
     
        {courseVideos.map((item , index) => (
          <div onClick={()=> playVideo(item.id)} key={item.id} className={`shadow-2xl w-full lg:w-72 cursor-pointer hover:bg-blue-700 hover:text-white   transition-colors duration-300 ease-in-out text-gray-700 p-2 rounded  ${vid.id === item.id ? "bg-blue-600 text-white" : "bg-gray-400"}`}  >
            <h5 className="font-serif">{index + 1}. {item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
