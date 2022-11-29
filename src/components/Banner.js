import React from "react";

const Banner = () => {
  return (
    <header
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="max-w-6xl mx-auto grid grid-cols-2"
    >
      {/* <div
        style={{ minHeight: "calc(100vh - 80px)" }}
        className="grid grid-cols-2  max-h-full"
      > */}
      <div className="basis-1/2 mt-[130px]">
        <h2 className="text-5xl text-[#313140] mb-7 font-bold">
          Automate job applications, shopping, and more.
        </h2>
        <p className="text-sm font-semibold text-gray-700 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>

        <button className="text-[18px] px-10 py-3 hover:text-white cursor-pointer mt-6 font-semibold transition-all duration-300 ring-1 ring-[#2cd6b5] bg-transparent rounded-md hover:bg-[#2cd6b5] ease-in-out ">
          Learn more
        </button>
      </div>
      <div classsName="basis-1/2 overflow-hidden">
        <img className="mt-[3rem]" alt="banner_image" src="/banner.png" />
      </div>
      {/* </div> */}
    </header>
  );
};

export default Banner;
