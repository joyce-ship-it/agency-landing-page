import React from "react";
import Header from "./Header";

export default function Home() {
  return (
    <div className="relative z-1 h-screen w-full bg-[url(/images/mobile/image-header.jpg)] bg-cover bg-center md:bg-[url(/images/desktop/image-header.jpg)]">
      <Header></Header>
      <h2 className="pt-[2rem] text-center text-[3.4rem] font-bold uppercase">
        we are creatives
      </h2>
      <div className="flex justify-center pt-[7rem]">
        <img
          src="/images/icon-arrow-down.svg"
          alt="picture of arrow pointing down"
        />
      </div>
    </div>
  );
}
