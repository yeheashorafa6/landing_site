"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { brandsImage } from "./../../../data/index";

function Brands() {
  const variantsx = {
    initial: {
      opacity: 0,
      y: -100,
      x: -200,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.section
      variants={variantsx}
      initial="initial"
      whileInView="animate"
      className=" mt-[80px] xl:mt-[150px] relative z-20"
    >
      <motion.div className="container mx-auto">
        <motion.div className="text-center">
          <motion.h1 className="text-4xl text-accent font-semibold lg:mb-3 mb-6">
            Our Brands
          </motion.h1>
        </motion.div>
        <motion.div className="flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-12">
          {brandsImage.map((item) => {
            return (
              <motion.div
                className="mx-auto hover:scale-125 ease-in-out transition-all duration-500 cursor-pointer "
                key={item.id}
              >
                <Image
                  src={item.image}
                  width={120}
                  height={120}
                  alt={item.image}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Brands;
