import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/more/logo1.png";
import { authContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, signOutUser } = useContext(authContext);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/addCoffee">
        <li>Add Coffee</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#372727] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-10" src={logo} alt="" />
            Espresso Emporium
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleSignOut} className="btn">
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
