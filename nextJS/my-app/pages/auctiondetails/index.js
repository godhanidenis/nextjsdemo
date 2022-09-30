import React from "react";
import Image from "next/image";
import Mobiledrawer from "../../components/Mobiledrawer";
import Navbar from "../../components/Navbar";
import black from "../../assets/black.png";
import Group from "../../assets/Group.png";
import img3 from "../../assets/img3.png";
import Footer from "../../components/Footer";
import Link from "next/link";
import img11 from "../../assets/collection/img11.png";
const index = () => {
  return (
    <div className="w-fit ">
      <Navbar />
      <div className="lg:xl:block p-14">
        <Mobiledrawer />
      </div>

      <div className=" lg:md:w-4/5 px-60 mx-auto  ">
        <div className="flex gap-8 p-2 px-60">
          <Image src={black} alt="black" width="50px" height="20px" />
          <p>01d 14h 23min left</p>
        </div>
        <p className="text-5xl  font-semibold p-2 px-60">Collezione Genesi</p>
        <div className="flex  p-2 ">
          <p className="px-60">
            DOLCE GABBANA may have made a return to physical runway shows, but
            it is still doubling down on the digital fashion world.
          </p>
          <Image src={Group} alt="Group" />
        </div>

        <div className="mt-16 px-64 relative w-[75%] h-[300px] md:h-[498px] mx-auto about-image lg:basis-1/2">
          <Image src={img3} alt="img3" layout="fill" />
        </div>

        <div className="flex gap-8 justify-center py-7 px-72">
          <Link href="/Itemover">
            <p className="hover:bg-black hover:text-white p-2 px-4 cursor-pointer rounded-full">Overview</p>
          </Link>
          <p className="hover:bg-black hover:text-white p-2 px-4 cursor-pointer rounded-full">Schedule</p>
          <Link href="/Allitems">
          <p className="hover:bg-black hover:text-white p-2 px-4 cursor-pointer rounded-full">All items</p>
          </Link>
        </div>
       
        <div className="px-60 text-left">
          <p className="text-xl font-medium ">Schedule</p>
          <p className="mt-6">
            <i className="text-base font-medium">Collezione Genesi features</i> 9 unique NFTs linked to couture from
            Dolce&Gabbana. Each piece was personally designed by Domenico Dolce
            and Steffano Gabbana exclusively for UNXD. The NFTs bridge the
            physical to the metaphysical with a variety of unique benefits.
          </p>
          <div className="flex mt-8 gap-24 justify-end px-2">
            <p className="text-base font-bold">Auction Start</p>
            <p className="text-base font-bold">Auction Start</p>
          </div>

          <div className="flex mt-8 justify-between">
            <p className="text-base font-medium">Dress from a Dream I</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">Dress from a Dream II</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">The Glass Suit Dream</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">Impossible Jacket I</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">Impossible Jacket II</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">Impossible Jacket III</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">Dress from a Dream I</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">The Impossibe Tiara</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
          <div className="flex mt-4 justify-between">
            <p className="text-base font-medium">The Lion CrownI</p>
            <p className="text-base font-medium">9 Sep 9AM CET</p>
            <p className="text-base font-medium">17 Sep 5pm CET</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center xl:px-80 h-full">
        <div
          className="container w- text-colorWhite py-20  flex flex-col items-center justify-center  bg-cover bg-no-repeat bg-left-bottom"
          style={{ backgroundImage: `url(${img11.src})` }}
        >
          <p className="text-6xl text-center font-semibold text-white">
            Never miss a drop.
          </p>
          <p className="text-white text-lg">
            Subscribe for the latest news, drops
          </p>
          <p className="text-white text-lg">collectibles</p>
          <div className="mt-8 flex gap-6">
            <input
              type="email"
              placeholder="Email"
              className=" rounded-sm px-4"
            />
            <button className="text-white bg-black p-2 rounded-sm">
              Subscribe
            </button>
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
