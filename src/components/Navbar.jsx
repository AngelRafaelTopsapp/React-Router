import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full  bg-slate-300">
      <nav className=" flex gap-10 justify-center">
        <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/video">Videos</Link>
      </nav>
    </div>
  );
};
export default Navbar;
