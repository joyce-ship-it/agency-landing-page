import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Menu from "./Menu";
export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  function toggleMenu() {
    setOpenMenu((prevVal) => !prevVal);
  }
  return (
    <div className="relative flex justify-between p-[1rem]">
      <div className="text-[1.6rem] font-bold">
        <a href="#">sunnyside</a>
      </div>
      <button className="cursor-pointer md:hidden" onClick={toggleMenu}>
        <GiHamburgerMenu size={26} />
      </button>
      <nav className="center hidden flex-row items-center gap-[1rem] text-center text-[1.1rem] md:flex">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a
          href="# "
          className="rounded-[1rem] bg-yellow-300 px-4 py-2 text-neutral-900"
        >
          Contact
        </a>
      </nav>
      {openMenu && <Menu toggle={toggleMenu}></Menu>}
    </div>
  );
}
