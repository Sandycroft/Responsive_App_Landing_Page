// components/Testimonials.js
"use client";
import React from "react";
import Test from "../public/assets/test.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonial } from "../constants/index";
import Star from "../public/assets/start.svg";

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 sm:container relative">
      <div className="flex flex-col mx-auto text-center">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg font-semibold font-clash-display text-[#ff5555]"
        >
          TESTIMONIAL
        </motion.h3>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="sm:text-5xl text-3xl font-clash-display font-bold mb-8"
        >
          What Our Users Say About Us?
        </motion.h1>
      </div>
      <div className="flex lg:flex-row items-center flex-col sm:pl-14 pl-5 sm:pr-14 pr-5">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Image src={Test} height={2500} width={2500} alt="Testimonial" />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:text-[34px] text-[24px] font-clash-display font-semibold"
          >
            The Best Financial Accounting App Ever!
          </motion.h3>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="sm:text-lg text-sm font-medium text-gray-700 dark:text-white font-clash-display"
          >
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-row gap-4"
          >
            {testimonial.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative w-20 h-20 rounded-full overflow-hidden"
              >
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                  alt={image.alt}
                  className="rounded-full"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-lg font-bold font-clash-display"
          >
            Nicks Jonas
          </motion.span>
        </div>
      </div>
      <Image
        src={Star}
        alt="Star"
        height={50}
        width={50}
        className="absolute bottom-0 -top-20 right-[20%] hidden md:block"
      />
      <Image
        src={Star}
        alt="Star"
        height={50}
        width={50}
        className="absolute bottom-10 hidden md:block"
      />
    </section>
  );
};

export default Testimonials;
