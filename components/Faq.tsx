// components/Faq.tsx
'use client'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from "../public/assets/start.svg";
import Image from "next/image";
// import { faqItems } from "@/constants";

export const faqItems = [
  {
    id: 1,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-[#ff5555]",
    textColor: "text-white font-clash-display dark:text-black",
  },
  {
    id: 2,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-white",
    textColor: "text-black font-clash-display",
  },
  {
    id: 3,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-[#ff5555]",
    textColor: "text-white dark:text-black font-clash-display",
  },
  {
    id: 4,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-white",
    textColor: "text-black font-clash-display",
  },
  {
    id: 5,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-[#ff5555]",
    textColor: "text-white dark:text-black font-clash-display",
  },
  {
    id: 6,
    title: "The Best Financial Accounting App Ever!",
    content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    bgColor: "bg-white",
    textColor: "text-black font-clash-display",
  },
];

const Faq = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopContent = (
    <div className="flex lg:flex-row flex-col-reverse gap-5">
      <motion.div initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }} className="flex flex-col gap-6">
        {faqItems.slice(0, 3).map((item) => (
          <div key={item.id} className={`${item.bgColor} px-8 py-8 rounded-lg shadow-lg transform transition-transform hover:scale-105`}>
            <h3 className={`text-3xl font-semibold ${item.textColor}`}>
              {item.title}
            </h3>
            <p className={`font-medium text-lg mt-2 ${item.textColor}`}>
              {item.content}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }} className="flex flex-col gap-6">
        {faqItems.slice(3).map((item) => (
          <div key={item.id} className={`${item.bgColor} px-8 py-8 rounded-lg shadow-lg transform transition-transform hover:scale-105`}>
            <h3 className={`text-3xl font-semibold ${item.textColor}`}>
              {item.title}
            </h3>
            <p className={`font-medium text-lg mt-2 ${item.textColor}`}>
              {item.content}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  const mobileContent = (
    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
      {faqItems.map((item) => (
        <div key={item.id} className={`${item.bgColor} px-8 py-8 rounded-lg shadow-lg transform transition-transform hover:scale-105`}>
          <h3 className={`text-3xl font-semibold ${item.textColor}`}>
            {item.title}
          </h3>
          <p className={`font-medium text-lg mt-2 ${item.textColor}`}>
            {item.content}
          </p>
        </div>
      ))}
    </Slider>
  );

  return (
    <section className="bg-white dark:bg-gray-900 sm:container mx-auto">
      <div className="sm:px-10  px-6 sm:py-16 py-14">
        <div className="flex flex-row items-center lg:gap-60 gap-9">
          <div className="mb-9">
            <motion.h3 initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className="text-lg font-medium text-[#ff5555]">FAQ</motion.h3>
            <motion.h1 initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className="font-bold sm:text-5xl text-3xl">
              Frequently Asked <br /> Questions
            </motion.h1>
          </div>
          <Image src={Star} alt="Star" height={50} width={50} className="animate-spin-slow" />
        </div>
        {isMobile ? mobileContent : desktopContent}
      </div>
    </section>
  );
};

export default Faq;
