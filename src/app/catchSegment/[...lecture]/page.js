"use client";
import React from "react";

const Lecture = ({ params }) => {
  return (
    <div>
      <h1>Day:{params.lecture[0]}</h1>
      <h1>Lecture No:{params.lecture[1]}</h1>
      <h1>Lecture Name:{params.lecture[2]}</h1>
    </div>
  );
};

export default Lecture;
