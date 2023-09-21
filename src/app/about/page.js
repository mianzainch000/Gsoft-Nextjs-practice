"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="heading">This is About Page</h1>
      <Link href="/">Back to Home Page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/")}>Back to home page</button>
      <br />
      <br />

      {/* Nesteted Routing */}
      <Link href="/about/aboutCollege">Go to about college Page</Link>
      <br />
      <br />
      <Link href="/about/aboutStudent">Go to about Student Page</Link>
      <br />
      <br />
    </>
  );
};

export default About;
