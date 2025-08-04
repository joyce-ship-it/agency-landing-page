import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#8ec5ff] p-[1.4rem]">
      <h2 className="text-center text-[1.4rem] font-bold">sunnyside</h2>
      <div className="flex justify-center gap-4 pt-4">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>
      <div className="flex justify-center gap-6 pt-4">
        <CiInstagram size={22} />
        <FaXTwitter size={22} />
        <FaPinterestP size={22} />
      </div>
    </div>
  );
}
