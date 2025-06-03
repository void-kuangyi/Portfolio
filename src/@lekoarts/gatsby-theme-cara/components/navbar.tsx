import * as React from "react";
import { useEffect, useState } from "react";
import "../styles/index.css";

const NavBar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/about/") {
      setActive("about");
    } else if (path === "/contact/") {
      setActive("contact");
    } else if (path === "/playground/") {
      setActive("playground");
    } else {
      setActive("projects");
    }
  });
  return (
    <div className="header">
      <a href="/">
        <div className="logo">Kuangyi Xing</div>
      </a>
      <div className="menu">
        <a
          href="/"
          className={active === "projects" ? "link active" : "link"}
          id="projects"
        >
          <div className="title">Projects</div>
        </a>
        <a
          href="/playground"
          className={active === "playground" ? "link active" : "link"}
          id="playground"
        >
          <div className="title">Playground</div>
        </a>
        <a
          href="/about"
          className={active === "about" ? "link active" : "link"}
          id="about"
        >
          <div className="title">About me</div>
        </a>
        <a
          href="/contact"
          className={active === "contact" ? "link active" : "link"}
          id="contact"
        >
          <div className="/contact">Contact</div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
