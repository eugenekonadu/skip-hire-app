import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { useLayout } from "../context/LayoutContext";
import "../styles/Layout.css";

export default function Layout({ children, selectedSkip}) {
  const { collapsed } = useLayout();

  return (
    <div className="layout">
      <div className={`side-nav ${collapsed ? "collapsed" : ""}`}>
        <SideNav />
      </div>
      <div className="main-content">
        <TopNav />
        <div className="page-content">{children}</div>
        <Footer selectedSkip={selectedSkip} />
      </div>
    </div>
  );
}
