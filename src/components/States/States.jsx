"use client"
import React from 'react'
import CountUp from "react-countup";
import { motion } from 'framer-motion';

function States() {
  const variants = {
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
  const variantsElem = {
    initial: {
      opacity: 0,
      y:-100
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        duration : 1,
      },
    },
  }
  return (
    <motion.section variants={variants} initial="initial" whileInView="animate" className='mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary p-24'>
        <motion.div className="container mx-auto">
            <motion.div className={`flex flex-col lg:flex-row items-center justify-between gap-24`}>
                  <motion.div className={` pr-8 xl:border-r-2 xl:border-accent `}>
                    <motion.h2 className='text-accent text-center text-5xl ' variants={variantsElem} initial="initial" whileInView="animate">
                      <motion.div ><CountUp  end={15} duration={2} className='text-5xl '/>+</motion.div>
                      <motion.span className='text-xl  text-gray-600'>Year Of Experence</motion.span>
                    </motion.h2>
                  </motion.div>
                  <motion.div className={` pr-8 xl:border-r-2 xl:border-accent `}>
                    <motion.h2 className={`text-accent text-center  text-5xl `} variants={variantsElem} initial="initial" whileInView="animate">
                    <motion.div ><CountUp end={90} duration={2} className=''/> + </motion.div>
                      <motion.span className='text-xl text-gray-600'>Projects Completed</motion.span>
                    </motion.h2>
                  </motion.div>
                  <motion.div className={` pr-8 xl:border-r-2 xl:border-accent `}>
                    <motion.h2 className='text-accent text-center text-5xl ' variants={variantsElem} initial="initial" whileInView="animate">
                    <motion.div ><CountUp end={70} duration={2} className=''/> + </motion.div>
                      <motion.span className='text-xl text-gray-600'>Happy Clients</motion.span>
                    </motion.h2>
                  </motion.div>
                  <motion.div className={``}>
                    <motion.h2 className='text-accent text-center text-5xl ' variants={variantsElem} initial="initial" whileInView="animate">
                    <motion.div ><CountUp end={25} duration={2} className=''/> + </motion.div>
                      <motion.span className='text-xl text-gray-600'>Year Of Experence</motion.span>
                    </motion.h2>
                  </motion.div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default States
