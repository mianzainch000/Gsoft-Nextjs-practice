"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./about.css";
const layout = ({ children }) => {
  const router = useRouter();
  const navigate = (page) => {
    return router.push("/about/" + page);
  };
  return (
    <div>
      <ul className="about-menu">
        <h4>Navbar</h4>
        <li>
          <button onClick={() => router.push("/about")}>Main About</button>
        </li>
        <li>
          <button onClick={() => navigate("aboutCollege")}>aboutCollege</button>
        </li>
        <li>
          <button onClick={() => navigate("aboutStudent")}>
            about student
          </button>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
