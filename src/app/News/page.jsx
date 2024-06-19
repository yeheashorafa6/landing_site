"use client"
import React from "react";
import { newsCard } from "./../../../data/index";
import NewsCard from "./NewsCard/NewsCard";
import Link from "next/link";
import { motion } from 'framer-motion'
function NewsPage() {
  const variants = {
    initial: {
      opacity: 0,
      x:100
    },
    animate: {
      opacity: 1,
      x:0,
      transition: {
        duration : 1,
      },
    },
  }

  const variantsx = {
    initial: {
      opacity: 0,
      x:-100
    },
    animate: {
      opacity: 1,
      x:0,
      transition: {
        duration : 1,
      },
    },
  }
  return (
    <motion.section   className="text-white">
      <motion.div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <motion.div variants={variants} initial="initial" whileInView="animate" className="mx-auto max-w-lg text-center">
          <motion.h2 className="text-3xl font-bold sm:text-4xl text-accent">
            Kickstart your marketing
          </motion.h2>

          <motion.p className="mt-4 text-gray-500 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </motion.p>
        </motion.div>

        <motion.div variants={variantsx} initial="initial" whileInView="animate" className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {
              newsCard.map((item) => {
                return (
                  <motion.div key={item.id} className="">
                    <NewsCard item={item} />
                  </motion.div>
                )
              })
            }
        </motion.div>

        <motion.div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-block bg-accent px-12 py-3 text-lm font-medium text-white transition hover:bg-accent-700 focus:outline-none rounded-md"
          >
            Get Started Today
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default NewsPage;
