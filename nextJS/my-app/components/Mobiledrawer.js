import React from "react";
import Image from "next/image";
import hamburger from "../assets/hamburger-icon.svg";
import notefictation from "../assets/Navbar/notefictation.svg";
import search from ".././assets/search.png";
import Menubar from "./Menubar";
const Mobiledrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className=" flex justify-between xl:hidden lg:hidden ">
        <div className="flex gap-5 ">
          <p className="text-4xl font-extrabold">U</p>
          <p className="text-4xl font-extrabold">N</p>
          <p className="text-4xl font-extrabold">X</p>
          <p className="text-4xl font-extrabold">D .</p>
        </div>
        <div className="flex gap-4">
          <Image src={search} alt="search" width="30px" height="25px" />
          <Image src={notefictation} alt="bell" width="100px" height="30px" />
          <Image
            src={hamburger}
            alt="MenuIcon"
            width="30px"
            onClick={handleClick}
          />
        </div>
      </div>
      {isOpen === true ? <Menubar /> : ""}
    </>
  );
};

export default Mobiledrawer;
