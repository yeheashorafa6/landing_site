"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass , faArrowRightLong , faWandMagicSparkles , faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

function Steps() {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
      x:-200
    },
    animate: {
      opacity: 1,
      y: 0,
      x:0,
      transition: {
        duration : 1,
      },
    },
  }
  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" className="mt-[80px] xl:mt[200px] relative z-20">
      <motion.div variants={variants} className="container mx-auto">
        <motion.div variants={variants} className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          <motion.div variants={variants} className="text-center">
            <motion.div variants={variants} className="mb-4">
              <FontAwesomeIcon icon={faCompass} className="text-accent text-2xl" />
            </motion.div>
            <h3 className="mb-2 text-2xl text-gray-800">Project Planning</h3>
            <p className="max-w-md mx-auto line-clamp-3  mb-3 text-gray-600">
              There are many variations of the passages of lorem Ipsum from
              available, majority. Btn text: Read more
            </p>
            <Link href="/" className="flex items-center justify-center text-[20px] hover:text-accent transition-all duration-300">
              Read More
              <span className="ml-3 mt-1">
                <FontAwesomeIcon icon={faArrowRightLong} className="arrow transition-all duration-500 text-accent"/>
              </span>
            </Link>
          </motion.div>
          <motion.div variants={variants} className="text-center border-t-2 xl:border-none pt-4 xl:pt-0">
            <motion.div variants={variants} className="mb-4">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-accent  text-2xl" />
            </motion.div>
            <h3 className="mb-2 text-2xl text-gray-800">Gaining Materials</h3>
            <p className="max-w-md mx-auto line-clamp-3 mb-3 font-light text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in
              iusto numquam alias iure ullam quo vel doloremque .
            </p>
            <Link href="/" className="flex items-center justify-center text-[20px] hover:text-accent transition-all duration-500">
              Read More
              <span className="ml-3 mt-1">
                  <FontAwesomeIcon icon={faArrowRightLong} className="arrow transition-all duration-500 text-accent"/>
              </span>
            </Link>
          </motion.div>
          <motion.div variants={variants} className="text-center border-t-2 xl:border-none pt-4 xl:pt-0">
            <motion.div variants={variants} className="mb-4">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="text-accent text-2xl" />
            </motion.div>
            <h3 className="mb-2 text-2xl text-gray-800">Project Execution</h3>
            <p className="max-w-md mx-auto line-clamp-3 mb-3 text-gray-600">
              numquam alias iure ullam quo sint vel doloremque culpa
              consequuntur tempore id a quod voluptatibus ad deleniti,
              distinctio animi.
            </p>
            <Link href="/" className="flex items-center justify-center text-[20px] hover:text-accent transition-all duration-300">
              Read More
              <span className="ml-3 mt-1">
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow transition-all duration-500 text-accent"/>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Steps;
