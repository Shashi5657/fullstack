import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className=" flex bg-amber-300 text-amber-50 w-full h-10  justify-between">
      {isLoggedIn && (
        <ul className="flex justify-center items-center space-x-10">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/about">About us</Link>
        </ul>
      )}
      {isLoggedIn ? (
        <button
          onClick={logout}
          className="bg-blue-400 text-white rounded mr-1 p-2"
        >
          Sign out
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
