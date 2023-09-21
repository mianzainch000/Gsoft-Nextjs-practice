import React from "react";
import Link from "next/link";
const AboutStudent = () => {
  return (
    <>
      <h1 className="heading">This is about student page</h1>
      <Link href="/about">Back to about page</Link>
    </>
  );
};

export default AboutStudent;
