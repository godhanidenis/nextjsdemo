import Image from 'next/image'
import React from 'react'
import notefictation from "../assets/Navbar/notefictation.svg";
import card from "../assets/Navbar/card.svg";
import profile from "../assets/Navbar/profile.svg"
const Navbar = () => {
  return (
    <div>
          <div className=" hidden md:block border-b-2 w-full z-10">
        {/* <Mobiledrawer/> */}
          <div className="flex justify-between h-6 m-4 px-10 ">
            <div className="flex gap-2 ">
              <p className="text-lg font-extrabold">U</p>
              <p className="text-lg font-extrabold">N</p>
              <p className="text-lg font-extrabold">X</p>
              <p className="text-lg font-extrabold">D</p>
            </div>
            <p className="text-base  font-medium">Drops Marketplace</p>
            <div className="flex gap-5">
              <Image src={notefictation} alt="bell" />
              <Image src={card} alt="bell" />
              <Image src={profile} alt="bell" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar