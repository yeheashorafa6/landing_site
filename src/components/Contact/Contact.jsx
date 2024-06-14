"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'
function Contact() {
    const variantsx = {
        initial: {
          opacity: 0,
          x:-200
        },
        animate: {
          opacity: 1,
          x:0,
          transition: {
            duration : 1,
          },
        },
      }
      const variantsy = {
        initial: {
          opacity: 0,
          y: -100,
        },
        animate: {
          opacity: 1,
          y: 0,

          transition: {
            duration : 2,
          },
        },
      }
  return (
    <motion.section variants={variantsx} initial="initial" whileInView="animate" className='mt-[80px] xl:mt-[150px] relative z-20'>
        <motion.div className="container mx-auto">
            <motion.div variants={variantsy} initial="initial" whileInView="animate" className="p-12 lg:p-24 bg-black rounded-[30px] flex flex-col items-center justify-center">
                <motion.h2 variants={variantsy} initial="initial" whileInView="animate" className='text-gray-400 text-3xl lg:text-5xl  mb-3 font-medium'>Do you want to join Interno?</motion.h2>
                <motion.h3 variants={variantsy} initial="initial" whileInView="animate"  className='text-gray-200 text-xl mb-3'>It is a long established fact will be distracted.</motion.h3>
                <motion.div variants={variantsy} initial="initial" whileInView="animate">
                    <Link href={"/Contact"}>
                        <motion.button  className="flex text-center items-center my-3 p-2 bg-accent text-white rounded-lg transition-all duration-500 mb-3">
                            Contact With Us
                            <motion.span className="ml-2 mt-1 transition-all duration-500">
                                    <FontAwesomeIcon icon={faArrowRightLong} className="mr-2 "/>
                            </motion.span>
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Contact
