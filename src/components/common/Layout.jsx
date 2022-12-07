import React from "react";
import NavBar from "../nav-bar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={{ marginTop: "10rem"}} >{children}</main>  
    </div>
  );
};

export default Layout;
