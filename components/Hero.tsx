// components/Hero.tsx
"use client";
import Image from "next/image";
import Phones from "../public/assets/phones.svg";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import BG from "../public/assets/bg1.svg";
import Watch from "../public/assets/watch.svg";
import Strip from "../public/assets/strip.svg";
import Star from "../public/assets/start.svg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-200 dark:from-gray-900 dark:to-gray-800 sm:container">
      {/* Decorative Stars */}
      <Image
        src={Star}
        alt="Star"
        height={50}
        width={50}
        className="absolute left-10 top-16 hidden md:block rotate-[27deg] animate-spin-slow"
      />
      <Image
        src={Star}
        alt="Star"
        height={50}
        width={50}
        className="absolute right-5 top-16 hidden md:block animate-pulse"
      />

      {/* Background Circle */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="absolute z-0 hidden lg:block"
        style={{
          width: "450px",
          height: "450px",
          left: "150px",
          top: "50px",
          background: "radial-gradient(circle at center, #ff5555, transparent 70%)",
          transform: "rotate(180deg)",
        }}
      ></motion.div>

      <div className="grid max-w-screen-xl px-4 pt-28 mx-auto lg:gap-16 xl:gap-0 lg:pt-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl dark:text-white font-clash-display"
          >
            Make   The   Best   Financial   Decisions
          </motion.h1>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="max-w-2xl mb-6 text-gray-700 font-medium lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300 font-clash-display"
          >
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </motion.p>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-row items-center"
          >
            <Button className="text-white border-0 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 focus:ring-4 focus:ring-red-400 font-medium text-sm px-8 py-3 text-center rounded-lg mr-5 font-clash-display shadow-lg transform transition-transform hover:scale-105">
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
            <Image
              src={Watch}
              width={153}
              height={56}
              alt="watch"
              loading="lazy"
              className="cursor-pointer transform transition-transform hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image
              src={Strip}
              width={505}
              height={313}
              alt="strip"
              loading="lazy"
              className="mt-8 transform transition-transform hover:scale-105 drop-shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="lg:mt-0 lg:col-span-5 lg:flex"
        >
          <Image
            src={Phones}
            alt="mockup"
            height={775}
            width={738}
            className="absolute sm:top-1 sm:right-[-73px] hidden lg:block transform transition-transform hover:scale-105 drop-shadow-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
