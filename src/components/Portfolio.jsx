import React from "react";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-[1fr_1fr] md:grid-cols-4">
      <div>
        <img
          src="/images/mobile/image-gallery-cone.jpg"
          alt="a cone"
          className="w-[100%] object-cover md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-cone.jpg"
          alt="a cone"
          className="hidden w-[100%] object-cover md:block"
        />
      </div>
      <div>
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          alt="bunch of milk bottles"
          className="w-[100%] object-cover md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-milkbottles.jpg"
          alt="bunch of milk bottles"
          className="hidden w-[100%] object-cover md:block"
        />
      </div>
      <div>
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          alt="oranges"
          className="w-[100%] object-cover md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-orange.jpg"
          alt="oranges"
          className="hidden w-[100%] object-cover md:block"
        />
      </div>
      <div>
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="bunch of sugar cubes"
          className="w-[100%] object-cover md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          alt="bunch of sugar cubes"
          className="hidden w-[100%] object-cover md:block"
        />
      </div>
    </div>
  );
}
