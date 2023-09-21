"use client";
import React from "react";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  const path = usePathname();
  return (
    <div>
      {/* !array.includes(path) ?    ==> It used for more than pages show or hide first of all create a array
      const array = ["/login/loginTeacher", "/login/loginStudent"]; */}

      {path !== "/login/loginTeacher" ? (
        <ul className="login-menu">
          <h4>Navbar Login</h4>
          <li>
            <Link href="/login">Main Login</Link>
          </li>
          <li>
            <Link href="/login/loginStudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginTeacher">Teacher Login</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
