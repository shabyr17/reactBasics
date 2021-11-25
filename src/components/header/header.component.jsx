/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./header.style.css";
import React_logo_wordmark from '../../assets/React_logo_wordmark.png';


export default function Header(props) {  
  return (
    <header className="Header">
      <img src={React_logo_wordmark} className="Logo" alt="logo" />
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
    </header>
  );
}
