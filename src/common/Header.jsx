import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1>Header Section</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About</Link>
          </li>
          <li>
            <Link to={"/course"}>Course</Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
