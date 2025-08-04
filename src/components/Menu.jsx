import React from "react";
import { IoCloseOutline } from "react-icons/io5";
export default function Menu({ toggle }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-50">
      <div className="absolute flex h-[300px] w-[350px] items-center justify-center rounded-[8px] bg-white text-black md:hidden">
        <nav className="center flex flex-col gap-[1rem] text-center text-[1.1rem]">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="# " className="rounded-[1rem] bg-yellow-300 px-4 py-2">
            Contact
          </a>
        </nav>
      </div>
      <button aria-braillelabel="close menu" className="cursor-pointer">
        <IoCloseOutline
          size={52}
          className="absolute top-2 left-2 z-10"
          onClick={toggle}
        />
      </button>
    </div>
  );
}
