"use client";
import React from "react";

const DetailPage = ({ params }) => {
  return (
    <div>
      <h1>Detail Page</h1>
      <h1>Name:{params.dynamic}</h1>
    </div>
  );
};

export default DetailPage;
