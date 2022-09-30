import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Mobiledrawer from "../../components/Mobiledrawer";
import Navbar from "../../components/Navbar";
import black from "../../assets/black.png";
import Group from "../../assets/Group.png";
import Image from "next/image";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/itemimg.png";
import imgc3 from "../../assets/collection/imgc3.png";
import imgc2 from "../../assets/collection/imgc2.png";
import imgc1 from "../../assets/collection/imgc1.png";
import group from "../../assets/collection/Group284.png";
import imgc4 from "../../assets/collection/imgc4.png";
import imgc5 from "../../assets/collection/imgc5.png";
import imgc6 from "../../assets/collection/imgc6.png";
import imgc7 from "../../assets/collection/imgc7.png";
import imgc8 from "../../assets/collection/imgc8.png";
import imgc9 from "../../assets/collection/imgc9.png";
import imgc10 from "../../assets/collection/imgc10.png";
import img11 from "../../assets/collection/img11.png";
const index = () => {
  return (
    <div className="w-fit ">
      <Navbar />
      <div className="lg:xl:block p-14">
        <Mobiledrawer />
      </div>


      <div className="">
        <div className=" xl:w-4/5 xl:px-60 lg:px-40  mx-auto  ">
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
            <p className="hover:bg-black hover:text-white p-2 px-4 cursor-pointer rounded-full">Overview</p>
            <Link href="/auctiondetails">
            <p className="hover:bg-black hover:text-white p-2 px-4  cursor-pointer rounded-full">Schedule</p>
            </Link>
            <Link href="/Allitems">
            <p className="hover:bg-black hover:text-white p-2 px-4  cursor-pointer rounded-full">All items</p>
            </Link>
          </div>

          <div>
            <p className="text-xl font-medium text-center">
              About the collection
            </p>
            <p className="text-left px-60  flex mt-8 ">
              Each shoe is represented by a 3D NFT of the shoe design, created
              by the MNTD studio. The MNTD platform is loaded with all of the
              shoes put up for auction along with a schedule of the individual
              auction dates To increase attention and manage such a large
              auction, shoes are auctioned off by artist (5 shoes per day) over
              10 days. After the auctions, NFTs are distributed to the winners.
              They can choose to redeem the NFT for the physical shoe, trade it
              on the secondary market, or hold onto the NFT forever. To simplify
              the logistics, all tokens must be redeemed within one year of the
              auction.Each owner redeeming a token will get an alternative NFT
              corresponding to a redeemed token. For example, the colors could
              be inverted or grayscale. It should be an interesting work of art
              in its own right, giving it the ability to command a value even
              after redemption.
            </p>
          </div>
          <div className="mt-16 px-64 relative w-[75%] h-[300px] md:h-[498px] mx-auto about-image lg:basis-1/2">
            <Image src={img4} alt="img3" layout="fill" />
          </div>

          <div className="mt-8">
            <p className="text-xl font-medium text-center">
              The worlds largest NFT auction{" "}
            </p>
            <p className="text-left px-60 flex  ">
              Natively Digital is a collection of remarkable, unique artworks
              co-curated with Robert Alice. We showcase some of the earliest,
              raw NFTs built on pre-Ethereum chains alongside newer, complex
              NFTs that showcase the cutting edge technical innovation. From
              across four continents, we have sourced emerging crypto artists
              and the old masters alike to exhibit their works. The multi-venue
              global exhibition is presented in partnership with @Samsung,
              featuring their lineup of innovative TVs and Projectors to
              showcase various NFT artworks. The landmark auction will provide
              an opportunity for collectors, curators, and enthusiasts to focus
              on the emerging ideas and aesthetics contained within these works.
              The Natively Digital auction will occur between June 3 and June 10
              online at sothebys.com. Discover more about the sale below.
            </p>
          </div>

          <div>
            <p className="text-left text-2xl font-bold mt-8 w-4/2 px-60 mx-auto ">
              “The mechanism: 10 artists create 50 custom designs to be
              auctioned as redeemable NFTs. 5 local and 5 international.”
            </p>
          </div>

          <div className="mt-8">
            <p className="text-left px-60 flex  ">
              Natively Digital is a collection of remarkable, unique artworks
              co-curated with Robert Alice. We showcase some of the earliest,
              raw NFTs built on pre-Ethereum chains alongside newer, complex
              NFTs that showcase the cutting edge technical innovation. From
              across four continents, we have sourced emerging crypto artists
              and the old masters alike to exhibit their works. The multi-venue
              global exhibition is presented in partnership with @Samsung,
              featuring their lineup of innovative TVs and Projectors to
              showcase various NFT artworks. The landmark auction will provide
              an opportunity for collectors, curators, and enthusiasts to focus
              on the emerging ideas and aesthetics contained within these works.
              The Natively Digital auction will occur between June 3 and June 10
              online at sothebys.com. Discover more about the sale below.
            </p>
          </div>

          <div className=" px-60 mt-8">
            <ul className="list-disc">
              <li>
                Carry out our obligations and to provide you with agreed
                products and services;
              </li>
              <li>Establish, maintain and administer your account;</li>
            </ul>
          </div>

          <div className=" px-60 mt-8">
            <p>
              Each shoe is represented by a 3D NFT of the shoe design, created
              by the MNTD studio. The MNTD platform is loaded with all of the
              shoes put up for auction along with a schedule of the individual
              auction dates.
            </p>
            <p className="mt-8">
              To increase attention and manage such a large auction, shoes are
              auctioned off by artist (5 shoes per day) over 10 days.After the
              auctions, NFTs are distributed to the winners. They can choose to
              redeem the NFT for the physical shoe , trade it on the secondary
              market, or hold onto the NFT forever. To simplify the logistics,
              all tokens must be redeemed within one year of the auction.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-center text-5xl  font-semibold">The Collection</p>
          <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-8 lg:xl:md:px-80 flex-wrap w-4/4">
            <div>
              <Image src={imgc3} alt="imgc3" />
              <div className="flex gap-8 mt-4">
                <Image src={black} alt="black" width="50px" height="20px" />
                <p>01d 14h 23min left</p>
              </div>
              <p className="text-2xl font-semibold mt-3">Shun Hirose</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>

              <div className="mt-5 border-b-2"></div>
            </div>
            <div>
              <Image src={imgc2} alt="imgc2" />
              <p className="text-gray-300 mt-4">Aug 19 to Aug 21 at 10am CET</p>
              <p className="text-2xl font-semibold mt-3">Shun Hirose</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>
              <div className="mt-5 border-b-2"></div>
            </div>

            <div>
              <Image src={imgc1} alt="imgc1" />
              <p className="text-gray-300 mt-4">Aug 19 to Aug 21 at 10am CET</p>
              <p className="text-2xl font-semibold mt-3">Shun Hirose</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>
              <div className="mt-5 border-b-2"></div>
            </div>
          </div>

          <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-12 lg:xl:md:px-80 flex-wrap w-4/4">
            <div>
              <Image src={imgc4} alt="imgc4" />
              <p className="text-gray-300 mt-4">01d 14h 23min left</p>
              <p className="text-2xl font-semibold mt-3">Marvy McKinney</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>

              <div className="mt-5 border-b-2"></div>
            </div>
            <div>
              <Image src={imgc5} alt="imgc5" />
              <p className="text-gray-300 mt-4">Aug 19 to Aug 21 at 10am CET</p>
              <p className="text-2xl font-semibold mt-3">Devon Lane</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>
              <div className="mt-5 border-b-2"></div>
            </div>

            <div>
              <Image src={imgc6} alt="imgc6" />
              <p className="text-gray-300 mt-4">Aug 19 to Aug 21 at 10am CET</p>
              <p className="text-2xl font-semibold mt-3">Savannah Nguyen</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>
              <div className="mt-5 border-b-2"></div>
            </div>
          </div>

          <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-12 lg:xl:md:px-80 flex-wrap w-4/4">
            <div>
              <Image src={imgc7} alt="imgc7" className="" />
              <p className="text-gray-300 mt-4">01d 14h 23min left</p>
              <p className="text-2xl font-semibold mt-3">Robert Fox</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>

              <div className="mt-5 border-b-2"></div>
            </div>
            <div>
              <Image src={imgc8} alt="imgc8" />
              <p className="text-gray-300 mt-4">Aug 19 to Aug 21 at 10am CET</p>
              <p className="text-2xl font-semibold mt-3">Eleanor Pena</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>
              <div className="mt-5 border-b-2"></div>
            </div>

            <div>
              <Image src={imgc9} alt="imgc9" />
              <p className="text-gray-300 mt-4">Aug 19 to Aug 21 at 10am CET</p>
              <p className="text-2xl font-semibold mt-3">Brooklyn Simmons</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>
              <div className="mt-5 border-b-2"></div>
            </div>
          </div>

          <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-12 lg:xl:md:px-80 flex-wrap w-4/4">
            <div>
              <Image src={imgc10} alt="imgc10" />
              <p className="text-gray-300 mt-4">01d 14h 23min left</p>
              <p className="text-2xl font-semibold mt-3">Robert Fox</p>
              <p>
                Tokyo-based Hirose has become known for his wild hybrid shoes,
                which see him deconstruct existing styles before slicing and
                splicing them into something new...
              </p>
              <div className="mt-4">
                <Image src={group} alt="group" />
              </div>

              <div className="mt-5 border-b-2"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center xl:px-80 h-full">
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
      </div>
      <div className="sm:mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default index;
