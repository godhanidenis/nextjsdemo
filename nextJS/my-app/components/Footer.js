import React from "react";
import Image from "next/image";
import Facebook from "../assets/socialmediaicon/facebook.svg";
import Twitter from "../assets/socialmediaicon/Twitter.svg";
import sheare from "../assets/socialmediaicon/sheare.svg";
const Footer = () => {
  return (
    <div className="bg-black px-20 pt-20  w-full grid lg:md:sm:grid-cols-4  ">
      <div>
        <div className="flex gap-4">
          <p className="text-lg font-extrabold text-white">U</p>
          <p className="text-lg font-extrabold text-white">N</p>
          <p className="text-lg font-extrabold text-white">X</p>
          <p className="text-lg font-extrabold text-white">D .</p>
        </div>
        <div>
          <p className="text-gray-500 mt-8">
            UNXD (‘Uncrossed’) is a marketplace for
          </p>
          <p className="text-gray-500">digitally authentic art, fashion, and</p>
          <p className="text-gray-500">experiences.</p>
        </div>
      </div>
      
      <div className="">
        <p className="font-semibold text-white">Navigate</p>
        <div className="mt-8">
          <p className="text-lg font- text-gray-700">Drops</p>
          <p className="text-lg font- text-gray-700">Marketplace</p>
          <p className="text-lg font- text-gray-700">Features</p>
          <div className="mt-8">
            <p className="text-lg font- text-gray-700">About</p>
            <p className="text-lg font- text-gray-700">Helpcenter</p>
          </div>
          <p className="text-base font- text-gray-700 mt-10">Privacy</p>
        </div>
        <p>Features</p>
      </div>

      <div className="">
        <p className="font-semibold text-white">Categories</p>
        <div className="mt-8">
          <p className="text-lg font- text-gray-700">Art</p>
          <p className="text-lg font- text-gray-700">Fashion</p>
          <p className="text-lg font- text-gray-700">Physical Events</p>
          <p className="text-lg font- text-gray-700">Digital Events</p>
          <p className="text-lg font- text-gray-700">Tradings Cards</p>
          <p className="text-lg font- text-gray-700">Collectibles</p>
          <p className="text-base font- text-gray-700 mt-11">Terms of Service</p>
        </div>
      </div>

      <div className="">
        <p className="font-semibold text-white">Newsletter</p>
        <div className="mt-8">
          <p className=" text-gray-700">
            Join our mailing list to stay in the loop with our newest feature
          </p>
          <p className=" text-gray-700">
            releases, NFT drops, and tips and tricks for navigating UNXD.
          </p>
          <div className="mt-8 flex gap-6">
            <input type="email" placeholder="Email" className="rounded-sm p-2 text-white bg-black border-2 border-gray-600"/>
            <button className="text-white">Subscribe</button>
          </div>
          <div className="mt-8 flex gap-6">
            <Image src={Facebook} alt="facebook" />
            <Image src={Twitter} alt="facebook" />
            <Image src={sheare} alt="facebook" />
          </div>
          <p className="text-base font- text-gray-700 mt-14">Report a Bug</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
