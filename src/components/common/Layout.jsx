import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap"
          rel="stylesheet"
        />
        <NavBar />
      </header>
      <main style={{ marginTop: "5rem" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
