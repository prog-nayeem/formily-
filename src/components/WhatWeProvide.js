import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const WhatWeProvide = () => {
  return (
    <section className="max-w-5xl mt-28 mb-20 mx-auto">
      <div className="">
        <h2 className="text-4xl text-center font-bold">What we provide</h2>
        <p className="text-sm mt-3 leading-6 text-center text-[#4b5563] font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <div className="grid grid-cols-3 gap-x-8 mt-12">
          <div className="">
            <p className="mt-1 text-gray-800">
              <span className="text-black font-bold text-lg">“</span>simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
              <span className="text-black font-bold text-lg">”</span>
            </p>
          </div>
          <div>
            <p className="mt-1 text-gray-800">
              <span className="text-black font-bold text-lg">“</span>simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not
              <span className="text-black font-bold text-lg">”</span>
            </p>
          </div>
          <div>
            <p className="mt-1 text-gray-800">
              <span className="text-black font-bold text-lg">“</span>simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
              <span className="text-black font-bold text-lg">”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
