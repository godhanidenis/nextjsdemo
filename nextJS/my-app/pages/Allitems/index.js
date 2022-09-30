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
import imgi1 from "../../assets/Allitems/imgi1.png"
import imgi2 from "../../assets/Allitems/imgi2.png"
import imgi3 from "../../assets/Allitems/imgi3.png"
import imgi4 from "../../assets/Allitems/imgi4.png"
import imgi5 from "../../assets/Allitems/imgi5.png"
import imgi6 from "../../assets/Allitems/imgi6.png"
import imgi7 from "../../assets/Allitems/imgi7.png"
import imgi8 from "../../assets/Allitems/imgi8.png"
import Group11 from "../../assets/Allitems/Group11.png"
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
                    <Link href="/auctiondetails">
                    <p className="hover:bg-black hover:text-white p-2 px-4 cursor-pointer rounded-full">Schedule</p>
                    </Link>
                    <p className="hover:bg-black hover:text-white p-2 px-4 cursor-pointer rounded-full">All items</p>
                </div>

                <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-12  flex-wrap w-full ">
                    <div>
                        <Image src={imgi1} alt="imgi1" />
                        <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2"> 
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Image src={imgi2} alt="imgi2" />
                    <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2">
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Image src={imgi3} alt="imgi3" />
                    <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2">
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-12  flex-wrap w-full ">
                    <div>
                        <Image src={imgi4} alt="imgi4" />
                        <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2"> 
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Image src={imgi5} alt="imgi5" />
                    <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2">
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Image src={imgi6} alt="imgi6" />
                    <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2">
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:xl:md:grid-cols-3 gap-7 mt-12  flex-wrap w-full ">
                    <div>
                        <Image src={imgi1} alt="imgi1" />
                        <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2"> 
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Image src={imgi7} alt="imgi7" />
                    <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2">
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
                    </div>

                    <div>
                    <Image src={imgi8} alt="imgi8" />
                    <div className="px-10 py-6 border-x-2">
                            <Image src={Group11} alt="group" />
                            <p className="text-lg font-normal">G#03 - La Tempête d'Horreur</p>
                        </div>
                        <div className="flex justify-between border-2">
                            <div className="p-2">
                                <p className=" text-gray-300">Current highest bid</p>
                                <p className="text-center">  5ETH</p>
                            </div>
                            <div className="border-l-2"></div>
                            <div className="p-2">
                                <p className=" text-gray-300">Ending in</p>
                                <p className="text-right">02h 23min 39sec</p>
                            </div>
                        </div>
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