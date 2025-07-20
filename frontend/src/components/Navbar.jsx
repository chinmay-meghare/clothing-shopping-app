import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1.8px solid #a040ae" : "none",
      paddingBottom: "4px",
      display: "inline-block",
      margin: "0 auto",
      transition: "all 0.2s ease",
      cursor: "pointer",
    };
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="website-logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" style={navLinkStyles}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" style={navLinkStyles}>
            COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyles}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyles}>
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search-logo"
        />

        <div className="group relative">
        <Link to='/login'> <img
            src={assets.profile_icon}
            className="w-4 cursor-pointer"
            alt="profile-logo"
          /></Link>

          <div className="hidden group-hover:block absolute dropmenu-right right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text">
              <p
                className="cursor-pointer text-center text-gray-700 hover:text-black hover:bg-blue-300"
                alt="myprofile-logo"
              >
                My Profile
              </p>
              <p
                className="cursor-pointer text-center text-gray-700 hover:text-black hover:bg-blue-300"
                alt="order-logo"
              >
                Order
              </p>
              <p
                className="cursor-pointer text-center text-gray-700 hover:text-black hover:bg-blue-300"
                alt="cart-logo"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart-logo" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}

      {/* below I gave Dynamic ClassName */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex justify-end items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible()}
            className="hover:bg-[#ffdad6] py-3 text-center border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible()}
            className="hover:bg-[#ffdad6] py-3 text-center border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible()}
            className="hover:bg-[#ffdad6] py-3 text-center border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible()}
            className="hover:bg-[#ffdad6] py-3 text-center border"
            to="/home"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
