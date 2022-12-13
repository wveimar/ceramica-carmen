import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={{ marginTop: "5rem" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
