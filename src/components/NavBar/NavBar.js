import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const navBarClick = () => {};

  return (
    //TODO: クリックをすると、図鑑が変わるように変更
    <nav className="navBar" onClick={navBarClick}>
      ← ポケモン図鑑(1/20) →
    </nav>
  );
};

export default NavBar;
