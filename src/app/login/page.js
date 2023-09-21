"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (pageName) => {
    return router.push("/login/" + pageName);
  };
  return (
    <>
      <h1 className="heading">This is Login Page</h1>
      <Link href="/">Back to Home Page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/")}>Back to home page</button>
      <br />
      <br />
      {/* Nested Routing use navigation */}
      <button onClick={() => navigate("loginTeacher")}>
        Go to Login Teacher Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("loginStudent")}>
        Go to Login Student Page
      </button>
      <br />
      <br />
    </>
  );
};

export default Login;
