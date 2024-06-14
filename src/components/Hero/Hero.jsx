"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

function Hero() {

  const textVatiants={
    initial : {
      opacity : 0,
      x : -200
    },
    animate : {
      opacity : 1,
      x : 0,
      transition : {
        duration : 1,
        staggerChildren : 0.1
      }
    }
  }
  return (
    <section className="h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover 
    bg-fixed bg-no-repeat xl:rounded-bl-[290px] relative z-20 rounded-bl-[100px]">
        <motion.div variants={textVatiants} initial="initial" whileInView="animate" className="container mx-auto h-full flex items-center justify-center xl:justify-start">
            <motion.div variants={textVatiants} className="w-[567px] flex flex-col item-center text-center
            xl:text-left lg:items-start">
                <motion.h1  variants={textVatiants} className="text-[60px] lg:text-[84px] leading-none mb-8">Let Your Home Be Unique</motion.h1>
                <motion.p  variants={textVatiants} className="mb-8">There are many variations of the passages of lorem Ipsum from available,variations of the passages. </motion.p>
                <motion.button  variants={textVatiants} className="h-[65px] px-[30px] transition-all duration-300 text-white rounded-[20px] flex items-center gap-2
                bg-primary hover:bg-primary-hover mx-auto xl:mx-0 tracking-widest ">Get free estimation 
                    <motion.span variants={textVatiants} className="text-accent w-5 transition-all duration-500">
                      <FontAwesomeIcon variants={textVatiants} className="group-hover:ml-5" icon={faArrowRightLong}/>
                    </motion.span>
                  </motion.button>
            </motion.div>
        </motion.div>
    </section>
  );
}

export default Hero;
