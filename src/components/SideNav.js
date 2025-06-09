import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaTrash, FaTruck, FaIdCard, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import "../styles/SideNav.css";
import { useLayout } from "../context/LayoutContext";
import { useEffect } from "react";


export default function SideNav() {
  const { collapsed, mobileNavOpen, setMobileNavOpen } = useLayout();
  const location = useLocation();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname, setMobileNavOpen]);

  const closeSideNav = () => setMobileNavOpen(false);

  return (
    <>
      {mobileNavOpen && <div className="backdrop" onClick={closeSideNav}></div>}
      <div className={`side-nav ${collapsed ? "collapsed" : ""} ${mobileNavOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSideNav}>✖</button>
        <ul>
          {[
            { path: "/post-code", label: "Postcode", icon: <FaMapMarkerAlt /> },
            { path: "/waste-type", label: "Waste Type", icon: <FaTrash /> },
            { path: "/", label: "Select Skip", icon: <FaTruck /> },
            { path: "/permit-check", label: "Permit", icon: <FaIdCard /> },
            { path: "/choose-date", label: "Choose Date", icon: <FaCalendarAlt /> },
            { path: "/payment", label: "Payment", icon: <FaCreditCard /> },
          ].map((item) => (
            <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
