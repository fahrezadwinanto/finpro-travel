import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

const NavBar = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("token");
  
  return (
    <div className="text-white rounded-full flex w-full px-10 space-x-4 h-[50px] items-center bg-[#00df9a] mx-auto">
      <h1 className="p-6 font-semibold text-green-900">VITE</h1>
      <Link to="/">
        <p className="p-4 font-semibold text-green-900">Home</p>
      </Link>

      <div className="flex-grow"></div>

      {isLoggedIn !== null && (
        <button
          className="flex items-center gap-2 ml-auto text-green-900 hover:text-red-600"
          onClick={handleLogout}
        >
          <CiLogout />
          logout
        </button>
      )}
    </div>
  );
};

export default NavBar;