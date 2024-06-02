/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { Lock, Search, X } from "react-feather";
import { Menu } from "react-feather";

interface HeaderItem {
  title: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const header: HeaderItem[] = [
    { title: "Store" },
    { title: "Mac" },
    { title: "iPad" },
    { title: "iPhone" },
    { title: "Watch" },
    { title: "Vision" },
    { title: "AirPods" },
    { title: "Tv & Home" },
    { title: "Entertainment" },
    { title: "Accessories" },
    { title: "Support" }
  ];

  return (
    //  sm:bg-red-900 md:bg-blue-600 lg:bg-teal-500 xl:bg-yellow-400
    <header className="text-white bg-zinc-800">
      <div className="container mx-auto flex justify-between text-center items-center p-4">
        <img
          width={20}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png"
          alt="Apple Logo"
          className="ml-12"
        />
        <div className="hidden lg:flex gap-4 text-xs">
          {header.map((item, index) => (
            <ul key={index} className="flex">
              <li>{item.title}</li>
            </ul>
          ))}
        </div>
        <div className="flex items-center text-zinc-500 gap-5">
          <Search size={20} />
          <Lock size={20} />
          <button className="lg:hidden" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-zinc-700 p-4">
          {header.map((item, index) => (
            <ul key={index} className="flex flex-col">
              <li className="py-1">{item.title}</li>
            </ul>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
