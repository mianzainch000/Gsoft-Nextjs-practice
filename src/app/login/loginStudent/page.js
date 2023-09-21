"use client";
import React from "react";
import { useRouter } from "next/navigation";
const LoginStudent = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="heading">This is Login Student Page</h1>
      <button onClick={() => router.push("/login")}>Back to login page</button>
    </>
  );
};

export default LoginStudent;
