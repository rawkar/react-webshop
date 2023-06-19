import React from 'react';
import './Styles/Header.sass';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <h1 className="logo">Webbshop</h1>
    </div>
    <nav className="main-nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Hem</a></li>
        <li className="nav-item"><a href="/produkter">Produkter</a></li>
        <li className="nav-item"><a href="/kontakt">Kontakt</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
