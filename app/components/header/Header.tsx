'use client'

import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  // useEffect(() => {
  //   const changeTheme = () => {
  //     let sw = document.querySelector('#switch-mode') as HTMLInputElement;
  //     if (!sw) return;

  //     let theme = sw.checked ? "dark" : "";
  //     document.documentElement.className = theme; // Change this line

  //     // Save theme to localStorage
  //     localStorage.setItem('theme', theme);

  //     // No need to reload the page
  //   };

  //   // Load theme from localStorage
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     document.documentElement.className = savedTheme; // Change this line
  //     let sw = document.querySelector('#switch-mode') as HTMLInputElement;
  //     if (sw) {
  //       sw.checked = savedTheme === 'dark';
  //     }
  //   }

  //   let sw = document.querySelector('#switch-mode') as HTMLInputElement;
  //   if (sw) {
  //     sw.addEventListener('change', changeTheme);
  //   }

  //   // Cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     let sw = document.querySelector('#switch-mode') as HTMLInputElement;
  //     if (sw) {
  //       sw.removeEventListener('change', changeTheme);
  //     }
  //   };
  // }, []);


    return (
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <Link className="logo" href="/">
            <img src="/images/solid.svg" alt="logo" />
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Overview</Link>
            <Link href="/">Features</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className={`btn-switch ${styles.btnSwitch}`}>
            <label className="switch-label">Light</label>
            <label className="switch" htmlFor="switch-mode">
                <input className="switch-input" type="checkbox" id="switch-mode" />
                <span className="slider round"></span>
            </label>
            <label className="switch-label">Dark</label>
          </div>

          <div className={styles.accountButtons}>
            <Link className="btn btn-gray" href="/signin"><i className="btn-icon fa-regular fa-arrow-right-to-bracket"></i> Sign in</Link>
            <Link className="btn btn-theme" href="/signup"><i className="btn-icon fa-regular fa-user"></i>Sign up</Link>
          </div>
        </div>
      </header>
    );
}