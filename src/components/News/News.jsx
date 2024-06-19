"use client"
import React from 'react'
import NewCard from './NewCard/NewCard'
import { motion } from 'framer-motion'
import {newsItems} from "./../../../data/index"
function News() {
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
    <motion.section className='mt-[80px] xl:mt-[150px] relative z-20'>
        <motion.div className="container mx-auto" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="my-10 text-center">
                <motion.h1 className="text-4xl font-semibold text-accent">Articals & News</motion.h1>
                <motion.p className="mb-10 mt-3 text-gray-400 font-light text-xl max-w-3xl mx-auto"> It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</motion.p>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" variants={variantsx} initial="initial" whileInView="animate">
                <NewCard item={newsItems}/>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default News
