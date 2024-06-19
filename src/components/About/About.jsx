"use client"
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
function About() {

    const variantsx = {
        initial: {
          opacity: 0,
          y: -100,
          x:200
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

      const variantsy = {
        initial: {
          opacity: 0,
          y: 100,
          x:-100
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
    <section  className='mt-[80px] xl:mt[200px] relative z-20'>
        <div className="container mx-auto">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div variants={variantsx} initial="initial" whileInView="animate" className="relative h-64 w-[500px] mx-auto overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                        alt="about"
                        src="/assets/about/img.png"
                        fill
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </motion.div>

                    <motion.div variants={variantsy} initial="initial" whileInView="animate">
                        <div className="lg:py-12 py-8 text-center lg:text-start">
                            <h2 className="text-3xl font-bold sm:text-4xl">We Create The Art Of Stylish Living Stylishly</h2>

                            <p className="mt-4 text-gray-500 max-w-md mx-auto text-center lg:text-start">
                            It is a long established fact that a reader will be distracted by the of readable content of a page 
                            when lookings at its layouts the points of using 
                            that it has a more-or-less normal.
                            </p>
                            
                        </div>
                        <div className="flex items-center justify-center xl:justify-start gap-4 mb-4">
                            <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                                <FontAwesomeIcon icon={faPhone} className='text-accent text-3xl'/>
                            </div>
                            <div className="">
                                <h3>+972 569 353 191</h3>
                                <h3>Call Us Aaytimes</h3>
                            </div>
                        </div> 
                            <button className="h-[65px] px-[30px] transition-all duration-300 text-white rounded-[20px] flex items-center gap-2
                                bg-primary hover:bg-primary-hover mx-auto xl:mx-0 tracking-widest ">Get free estimation
                                    <span className="text-accent w-5 transition-all duration-500 mt-1">
                                        <FontAwesomeIcon className="group-hover:ml-5 mt-1" icon={faArrowRightLong}/>
                                    </span>
                            </button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
