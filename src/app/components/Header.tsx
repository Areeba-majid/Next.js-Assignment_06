import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      {/* top Header */}
      <div className="hidden xl:block border-b border-b-black xl:bg-[#f7f7f7] px-16px">
        <div className="flex justify-between items-center gap-8 py-3 w-full">
          <div className="flex justify-center item-center gap-4">
            <p className="text-sm pt-2 pl-3">
              Phone Number: 956 742 455 678
              </p>
            <div className="border boder-black h-8  "></div>
            <p className="text-sm font-[Roboto] font-normal pt-2">
              Email:info@ddsgnr.com
            </p>
          </div>
          <div className="flex justify-center pr-10 items-center gap-3 ">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div></div>
      {/*  Header 2 */}
      <div className="border-b border-b-black xl:bg-[#f7f7f7] ">
        <div className="flex mx-6 xl:mx-16 my-3 my:xl-[14px] justify-center xl:justify-between items-center gap-8 xl:gap-0">
          <div className="flex flex-grow justify-start items-center gap-2 px-2 xl:py-[29px] ">
            <Image src="/image/logo.png" alt="logo" width={130} height={40} />
          </div>
          <div className="hidden xl:flex bg-white gap-8">
            <div className="flex gap-8">
              <button className="border-b border-black p-[10px]">Home</button>
              <button className="p-[10px]">Courses</button>
              <button className="p-[10px]">Service</button>
              <button className="p-[10px]">Achievement</button>
              <button className="p-[10px]">About Us</button>
              <button className="p-[10px]">Testimonial</button>
            </div>
            <div className="flex gap-8">
              <button className="py-2 px-5 rounded-[5px] border border-black">
                Login
              </button>
              <button className="py-2 px-5 rounded-[5px] border  black bg-black text-white h">
                Sign Up
              </button>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:hidden flex flex-grow-0 justify-center items-center p-6 ">
            <Image src="/image/menu.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
