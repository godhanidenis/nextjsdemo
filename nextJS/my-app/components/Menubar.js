import React from "react";
import Image from "next/image";
import arrowdown from "../assets/arrowup.svg";
import close from "../assets/icons8-close.svg";
import { Switch } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
const Menubar = () => {
  const [isItemOpen, setItemOpen] = React.useState(false);
  const [isItemOpens, setItemOpens] = React.useState(false);
  const [isItemOpenes, setItemOpenes] = React.useState(false);
  const [Open, setOpen] = React.useState(true);
  const arrowRotation = isItemOpen ? "-rotate-90" : "";
  const handleItemClick = () => setItemOpen(!isItemOpen);
  const handleItemClicks = () => setItemOpens(!isItemOpens);
  const handleItemClickes = () => setItemOpenes(!isItemOpenes);

  const openMenubar = () => {
    setOpen(false);
  };

  return (
    <>
      {!Open === false ? (
        <div className="lg:hidden p-8 pt-4 w-full  fixed z-50 right-0 top-60 h-full transition-transform duration-300 bg-white rounded-md  border-t-4">
          <div className="flex justify-end pb-2">
            <Image src={close} alt="cancel" onClick={openMenubar} />
          </div>
          <div className="flex justify-between">
            <p className="text-4xl font-semibold">Sort</p>
            <Image
              src={arrowdown}
              alt="arrodown"
              width={20}
              fill={arrowRotation}
              onClick={handleItemClick}
            />
          </div>
          <div className="py-6">
            <AnimatePresence>
              {isItemOpen && (
                <>
                  <motion.p
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base origin-top"
                  >
                    <input
                      placeholder="Ending soon"
                      className="w-3/4 h-16 p-5  text-2xl border-4"
                    />
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className="border-2"></div>

          <div className="py-4">
            <div className=" flex justify-between">
              <p className="text-4xl py-4 font-semibold">Status</p>
              <Image src={arrowdown} alt="arrodown" width={20} onClick={handleItemClicks}/>
            </div>
            <AnimatePresence>
              {isItemOpens && (
                <>
                  <motion.p
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base origin-top"
                  >
                    <div className="">
                      <ul class="none">
                        <li className="flex">
                          <Switch defaultChecked color="default" size="large" />
                          <p className="text-xl p-1">Now live</p>
                        </li>
                        <li className="flex">
                          <Switch defaultChecked color="default" size="large" />
                          <p className="text-xl p-1">On Auction</p>
                        </li>
                        <li className="flex">
                          <Switch defaultChecked color="default" size="large" />
                          <p className="text-xl p-1">New</p>
                        </li>
                        <li className="flex">
                          <Switch defaultChecked color="default" size="large" />
                          <p className="text-xl p-1">Has offers</p>
                        </li>
                      </ul>
                    </div>
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className="border-2"></div>

          <div className="flex justify-between py-8">
            <p className="text-4xl font-semibold">Price</p>
            <Image
              src={arrowdown}
              alt="arrodown"
              width={20}
              fill={arrowRotation}
              onClick={handleItemClickes}
            />
          </div>
          <div className="py-2">
            <AnimatePresence>
              {isItemOpenes && (
                <>
                  <motion.p
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base origin-top"
                  >
                    <input
                      placeholder="UN-USD"
                      className="w-3/4 h-16 p-5  text-2xl border-4"
                    />
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="border-2"></div>
          
          <div className="flex justify-between py-8">
            <p className="text-4xl font-semibold">Chains</p>
            <Image
              src={arrowdown}
              alt="arrodown"
              width={20}
              fill={arrowRotation}
              onClick={handleItemClickes}
            />
          </div>
          <div className="py-2">
            <AnimatePresence>
              {isItemOpenes && (
                <>
                  <motion.p
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base origin-top"
                  >
                    <input
                      placeholder="UN-USD"
                      className="w-3/4 h-16 p-5  text-2xl border-4"
                    />
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
          
          <div className="border-2"></div>
          
          <div className="flex justify-between py-8">
            <p className="text-4xl font-semibold">Currency</p>
            <Image
              src={arrowdown}
              alt="arrodown"
              width={20}
              fill={arrowRotation}
              onClick={handleItemClickes}
            />
          </div>
          <div className="py-2">
            <AnimatePresence>
              {isItemOpenes && (
                <>
                  <motion.p
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base origin-top"
                  >
                    <input
                      placeholder="UN-USD"
                      className="w-3/4 h-16 p-5  text-2xl border-4"
                    />
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="border-2"></div>
          
          <div className="flex justify-between py-8">
            <p className="text-4xl font-semibold">Type</p>
            <Image
              src={arrowdown}
              alt="arrodown"
              width={20}
              fill={arrowRotation}
              onClick={handleItemClickes}
            />
          </div>
          <div className="py-2">
            <AnimatePresence>
              {isItemOpenes && (
                <>
                  <motion.p
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base origin-top"
                  >
                    <input
                      placeholder="UN-USD"
                      className="w-3/4 h-16 p-5  text-2xl border-4"
                    />
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Menubar;
