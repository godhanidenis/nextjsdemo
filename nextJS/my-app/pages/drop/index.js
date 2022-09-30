import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import UNXD from "../../assets/unxd.png";
// import hamburger from "../../assets/hamburger-icon.svg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import imgd1 from "../../assets/dropsArchive/imgd1.png";
import imgd3 from "../../assets/dropsArchive/imgd3.png";
import imgd2 from "../../assets/dropsArchive/imgd2.png";
import black from "../../assets/black.png";
import imgs from "../../assets/subscription/imgs.png";
import groupimg from "../../assets/groupimg.png";
import Footer from "../../components/Footer";
import Mobiledrawer from "../../components/Mobiledrawer";
import Navbar from "../../components/Navbar";
const index = () => {
  // let pagewidth= window.innerWidth
  // console.log(pagewidth)
  return (
    <div className="w-fit  justify-between">
      <Navbar />
      <div className="lg:xl:block p-14">
        <Mobiledrawer />
        {/* ------------------------------------------------ */}
        <div className="xl:mt-48 mt-16">
          <div className="flex-col">
            <p className="text-6xl xl:lg:md:text-center font-semibold">
              UNXD Drops
            </p>
            <div className="mt-8">
              <p className="sm:text-center text-xl font-normal">
                We pay the tribute to the past while enabling the new
              </p>
              <p className="sm:text-center text-xl font-normal">
                and futuristic.We mix the familiar with the{" "}
              </p>
              <p className="sm:text-center text-xl font-normal"> futuristic </p>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------ */}
        <div className="mt-4 xl:px-80">
          <p className="font-semibold text-xl leading-7 border-t-2 w-28">
            Live drops.
          </p>
          <div className="border-b-2 mt-12"></div>

          {/* --------------------------------------------------------------- */}
          <div className="mt-12 sm:flex gap-36 w-full ">
            {/* <div className="bg-cover "> */}
            <Image
              src={img1}
              alt="img"
              width={1400}
              height={750}
              className="justify-center"
            />
            {/* </div> */}
            <Link href="/Itemover">
            <div className="mt-8 w-full cursor-pointer">
              <div className="flex gap-8">
                <Image src={black} alt="black" width="50px" height="20px" />
                <p>01d 14h 23min left</p>
              </div>
              <p className="font-semibold text-3xl">Icons Unmasked II Open</p>
              <p className="font-semibold text-3xl">Editions</p>
              <p className="text-gray-500 mt-2 text-xs font-normal">
                Each shoe is represented by a 3D NFT of the shoe design, created
                by the MNTD studio. The MNTD platform is loaded with all of the
                shoes.
              </p>
              <div className="mt-10">
                <Image src={groupimg} alt="groupimg" />
              </div>
            </div>
            </Link>
          </div>
          <div className="border-b-2 mt-12"></div>
          {/* ------------------------------------------------------ */}
          <div className="mt-12 sm:flex gap-36 w-full">
            <div className="bg-cover ">
              <Image
                src={img2}
                alt="img2"
                width={900}
                height={480}
                className="justify-center"
              />
            </div>
            <div className="mt-8">
              <div className="flex gap-8">
                <Image src={black} alt="black" width="50px" height="20px" />
                <p>01d 14h 23min left</p>
              </div>
              <p className="font-semibold text-3xl">
                VR Graffiti Sessions Volume 1
              </p>
              <p className="font-semibold text-3xl">Editions</p>
              <p className="text-gray-500 mt-2 text-xs font-normal">
                Each shoe is represented by a 3D NFT of the shoe design, created
                by the MNTD studio. The MNTD platform is loaded with all of the
                shoes.
              </p>
              <div className="mt-6">
                <Image src={groupimg} alt="groupimg" />
              </div>
            </div>
          </div>

          <div className="border-b-2 mt-12"></div>
        </div>

        {/* ------------------------------------------------------------ */}
        <div className="mt-16 px-64 relative w-[95%] h-[300px] md:h-[498px] mx-auto about-image lg:basis-1/2">
          <Image src={img3} alt="img3" layout="fill" className="rounded-md" />
        </div>

        {/* ----------------------------------------------------------------------- */}
        <div className="mt-16 xl:px-80">
          <p className="font-semibold text-xl leading-7 border-t-2 w-32">
            drops archive.
          </p>
          <div className="border-b-2 mt-12"></div>

          <div className="mt-12 sm:flex gap-36 w-full">
            <Image
              src={imgd3}
              alt="img"
              width={900}
              height={480}
              className="justify-center"
            />
            <div className="mt-8">
              <p className="text-gray-500">July 19th 2021</p>
              <p className="font-semibold text-3xl">
                50 for the 50th Collection
              </p>
              <p className="text-gray-500 mt-2 text-xs font-normal">
                Each shoe is represented by a 3D NFT of the shoe design, created
                by the MNTD studio. The MNTD platform is loaded with all of the
                shoes.
              </p>
              <div className="mt-10 flex justify-between">
                <Image src={groupimg} alt="groupimg" />
                <p className="border-b-2 border-black">Get notified</p>
              </div>
            </div>
          </div>
          <div className="border-b-2 mt-12"></div>
          {/* ---------------------------------------------------------- */}
          <div className="mt-12 sm:flex gap-36 w-full">
            <Image
              src={imgd2}
              alt="img3"
              width={900}
              height={480}
              className="justify-center"
            />
            <div className="mt-8">
              <p className="text-gray-500">July 19th 2021</p>
              <p className="font-semibold text-3xl">
                Color of Reality by Alexa Meade{" "}
              </p>
              <p className="font-semibold text-3xl">
                x Jon Boogz x Kalie Acheson
              </p>
              <p className="text-gray-500 mt-2 text-xs font-normal">
                Each shoe is represented by a 3D NFT of the shoe design, created
                by the MNTD studio. The MNTD platform is loaded with all of the
                shoes.
              </p>
              <div className="mt-10 flex justify-between">
                <Image src={groupimg} alt="groupimg" />
              </div>
            </div>
          </div>
          <div className="border-b-2 mt-12"></div>

          {/* ------------------------------------------------------------------------ */}

          <div className="mt-12 sm:flex gap-36 w-full">
            <Image
              src={imgd1}
              alt="img"
              width={900}
              height={480}
              className="justify-center"
            />
            <div className="mt-8">
              <p className="text-gray-500">July 19th 2021</p>
              <p className="font-semibold text-3xl">
                50 for the 50th Collection
              </p>
              <p className="text-gray-500 mt-2 text-xs font-normal">
                Each shoe is represented by a 3D NFT of the shoe design, created
                by the MNTD studio. The MNTD platform is loaded with all of the
                shoes.
              </p>
              <div className="mt-10 flex justify-between">
                <Image src={groupimg} alt="groupimg" />
              </div>
            </div>
          </div>
          <div className="border-b-2 mt-12"></div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button className="border-2 p-3">Load More</button>
        </div>
        {/* ---------------------------------------------------------------------------------------- */}

        {/* className="container mt-5  text-colorWhite  flex flex-col justify-center items-center py-4 bg-cover bg-no-repeat " */}

        <div className="mt-12 flex justify-center xl:px-80 h-full">
          <div
            className="container w- text-colorWhite py-20  flex flex-col items-center justify-center  bg-cover bg-no-repeat bg-left-bottom"
            style={{ backgroundImage: `url(${imgs.src})` }}
          >
            <p className="text-6xl text-center font-semibold text-white">
              Never miss a drop.
            </p>
            <p className="text-white text-lg">
              Subscribe for the latest news, drops &
            </p>
            <p className="text-white text-lg">collectibles</p>
            <div className="mt-8 flex gap-6">
              <input type="email" placeholder="Email" className=" rounded-sm" />
              <button className="text-white bg-black p-2 rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default index;
