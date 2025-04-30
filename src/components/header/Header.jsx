import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link> {/* (you'll need to create this route if needed) */}
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact</Link> {/* (you'll need to create this route if needed) */}
      </nav>
      <div className={styles.buttons}>
        {/* You can add buttons later */}
      </div>
    </header>
  );
}
