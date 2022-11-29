import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <section className="h-[150px] bg-[#2cd6b5] flex items-center">
      <div className="flex w-full items-center justify-between px-12">
        <p className="text-gray-100">© 2022 Formily. All rights reserved.</p>
        <div className="flex items-center space-x-4 text-gray-100">
          <p className="cursor-pointer">Support</p>
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Privacy</p>
          <FacebookRoundedIcon sx={{ cursor: "pointer" }} />
          <TwitterIcon sx={{ cursor: "pointer" }} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
