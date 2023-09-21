import React from "react";
import Link from "next/link";
const AboutCollege = () => {
  return (
    <>
      <h1 className="heading">This is about college page</h1>
      <Link href="/about">Back to about page</Link>
    </>
  );
};

export default AboutCollege;
