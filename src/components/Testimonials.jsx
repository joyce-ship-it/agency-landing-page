import React from "react";

export default function Testimonials() {
  return (
    <article className="bg-neutral-50 text-neutral-800">
      <h2 className="pt-[1rem] text-center text-[1.2rem] text-neutral-400 uppercase italic">
        Client testimonials
      </h2>

      <div className="flex flex-wrap justify-around gap-[1rem] p-[1rem]">
        <div className="flex flex-col items-center gap-[1rem] rounded-[1rem] border-2 p-[1.2rem]">
          <div>
            <img
              src="/images/image-emily.jpg"
              alt="profile picture of emily"
              className="rounded-[50%]"
            />
          </div>
          <p className="w-[30ch]">
            'We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit. '
          </p>
          <h2>Emily R</h2>
          <h3 className="text-neutral-500">Business Owner</h3>
          <div></div>
        </div>
        <div className="flex flex-col items-center gap-[1rem] rounded-[1rem] border-2 p-[1.2rem]">
          <div>
            <img
              src="/images/image-jennie.jpg"
              alt="profile picture of emily"
              className="rounded-[50%]"
            />
          </div>
          <p className="w-[30ch]">
            'Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience. '
          </p>
          <h2>Jennie</h2>
          <h3 className="text-neutral-500">Marketing Director</h3>
          <div></div>
        </div>
        <div className="flex flex-col items-center gap-[1rem] rounded-[1rem] border-2 p-[1.2rem]">
          <div>
            <img
              src="/images/image-thomas.jpg"
              alt="profile picture of emily"
              className="rounded-[50%]"
            />
          </div>
          <p className="w-[30ch]">
            'Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended! '
          </p>
          <h2>Thomas</h2>
          <h3 className="text-neutral-500">Chief Operating Officer</h3>
          <div></div>
        </div>
      </div>
    </article>
  );
}
