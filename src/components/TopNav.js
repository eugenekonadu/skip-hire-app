import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useLayout } from '../context/LayoutContext';
import '../styles/TopNav.css';

export default function TopNav() {
  const { toggleTheme } = useContext(ThemeContext);
  const {
    collapsed,
    setCollapsed,
    mobileNavOpen,
    setMobileNavOpen
  } = useLayout();

  const toggleSideNav = () => {
    // On desktop: toggle collapsed
    // On mobile: toggle mobile nav
    if (window.innerWidth <= 768) {
      setMobileNavOpen(!mobileNavOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <nav className="top-nav">
      <button className="hamburger" onClick={toggleSideNav}>☰</button>
      <h1>Skip Hire</h1>
      <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
    </nav>
  );
}
