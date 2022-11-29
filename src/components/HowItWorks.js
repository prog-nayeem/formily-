import React from "react";
import AbcIcon from "@mui/icons-material/Abc";

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mt-10 mx-auto">
      <div>
        <h2 className="text-4xl text-center font-bold">How it works</h2>
        <p className="text-sm mt-3 leading-6 text-center text-[#4b5563] font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <div className="grid grid-cols-3 gap-x-8 mt-12">
          <div className="grid place-items-center">
            <span className="bg-slate-100 rounded-full p-4">
              <AbcIcon />
            </span>
            <h2 className="text-xl mt-4 font-semibold text-[#4b5563]">
              Lorem Ipsum is simply dummy{" "}
            </h2>
            <p className="mt-1 text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="grid place-items-center">
            <span className="bg-slate-100 rounded-full p-4">
              <AbcIcon />
            </span>
            <h2 className="text-xl mt-4 font-semibold text-[#4b5563]">
              Lorem Ipsum is simply dummy{" "}
            </h2>
            <p className="mt-1 text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="grid place-items-center">
            <span className="bg-slate-100 rounded-full p-4">
              <AbcIcon />
            </span>
            <h2 className="text-xl mt-4 font-semibold text-[#4b5563]">
              Lorem Ipsum is simply dummy{" "}
            </h2>
            <p className="mt-1 text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
