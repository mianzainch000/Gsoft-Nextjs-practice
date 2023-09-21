"use client";
import React from "react";
import { useRouter } from "next/navigation";
const LoginTeacher = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="heading">This is Login Teacher Page</h1>
      <button onClick={() => router.push("/login")}>Back to login page</button>
    </>
  );
};

export default LoginTeacher;
