import React from "react";

export default function Showcase() {
  return (
    <div className="relative isolate z-0">
      <div className="md:flex">
        <div className="md:flex-1">
          <img
            src="/images/mobile/image-transform.jpg"
            alt="a  picture of an egg"
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[1rem] bg-neutral-50 p-[1rem] text-neutral-900 md:flex-1 md:p-0">
          <h1 className="text-[1.4rem] font-semibold">Transform your brand</h1>
          <p className="w-[30ch] text-justify text-[1.1rem]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.{" "}
          </p>
          <a href="#" className="hover:underline">
            Learn more
          </a>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <div className="md:flex-1">
          <img
            src="/images/mobile/image-stand-out.jpg"
            alt="a  picture of an glass with some juice"
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[1rem] bg-neutral-50 p-[1rem] text-neutral-900 md:flex-1 md:p-0">
          <h1 className="text-[1.4rem] font-semibold">
            Stand out to the right audience
          </h1>
          <p className="w-[30ch] text-[1.1rem]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{" "}
          </p>
          <a href="#" className="hover:underline">
            Learn more
          </a>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative flex-1">
          <img
            src="/images/mobile/image-graphic-design.jpg"
            alt="an illustration"
            className="w-[100%] object-cover"
          />
          <div className="absolute right-0 bottom-[20%] left-0 flex flex-col items-center justify-center">
            <h1 className="text-[1.4rem] font-semibold">Graphic design</h1>
            <p className="w-[30ch] text-[1.1rem]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.{" "}
            </p>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            src="/images/mobile/image-photography.jpg"
            alt="an illustration"
            className="w-[100%] object-cover"
          />
          <div className="absolute right-0 bottom-[20%] left-0 flex flex-col items-center justify-center">
            <h1 className="text-[1.4rem] font-semibold">Photography </h1>
            <p className="w-[30ch] text-[1.1rem]">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
