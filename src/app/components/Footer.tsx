import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-12 px-6 xl:p-20 gap-12 xl:gap-20 xl:mt-[50px] xl:mb-[90px]">
      <div className="flex flex-col justify-center items-center gap-12 xl:gap-20 xl:w-full">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between xl:items-start gap-6 xl:gap-0 w-full">
          <div className="flex flex-col justify-center items-center xl:item-start gap-4 xl:w-full">
            <h2 className="font-semibold text-lg text-center xl:text-left">
              Subscribe to our newsletter
            </h2>
            <p className="text-center xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center xl:items-start gap-4 w-full">
            <form className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-black rounded-[5px] p-3"
              />
              <button className="w-full px-6 py-3 border border-black ronded-[5px]/">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-center">
              By subscribing you agree to with our{" "}
              <span className="underline">Privecy Policy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-start gap-8 xl:gap-10 xl:w-full">
          <div className="flex justify-center items-center gap-[10px}">
            <Image src="/image/logo.png" alt="logo" width={130.6} height={40} />
            {/* <span className="font-inter text-2xl font-bold">Ddsgn</span> */}
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Courses</h3>
            <div>
              <p className="py-2 text-sm text-center">Business</p>
              <p className="py-2 text-sm text-center">Development</p>
              <p className="py-2 text-sm text-center">Technology</p>
              <p className="py-2 text-sm text-center">Design</p>
              <p className="py-2 text-sm text-center">Programming</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Resources</h3>
            <div>
              <p className="py-2 text-sm text-center">Careere</p>
              <p className="py-2 text-sm text-center">Resume</p>
              <p className="py-2 text-sm text-center">Learning</p>
              <p className="py-2 text-sm text-center">Interview Preperation</p>
              <p className="py-2 text-sm text-center">Jobs</p>
            </div>
          </div>
          <div className="flex flex-col justify-center item-center gap-4">
            <h3 className="font-semibold text-center">About Us</h3>
            <div>
              <p className="py-2 text-sm text-center">Contact</p>
              <p className="py-2 text-sm text-center">Help/Support</p>
              <p className="py-2 text-sm text-center">FAQ</p>
              <p className="py-2 text-sm text-center">Terms&Conditions</p>
              <p className="py-2 text-sm text-center">Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <hr className="border border-black w-full" />
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between gap-6 items-center xl:w-full">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-6">
              <p className="text-center text-sm">
                Copyright 2023 Ddsgn. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="text-center text-sm underline">Privecy Policy</p>
                <p className="text-center text-sm underline">
                  Terms of Service
                </p>
                <p className="text-center text-sm underline">Cookies Setting</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
