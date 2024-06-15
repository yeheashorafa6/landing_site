"use client"
import Link from 'next/link'
import React from 'react'
import NewCard from './NewCard/NewCard'
import new1 from "./../../../public/assets/news/01.png"
import new2 from "./../../../public/assets/news/02.png"
import new3 from "./../../../public/assets/news/03.png"
import { motion } from 'framer-motion'
function News() {
    const items = [
        {id : 1 , img :new1 , desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit" , date : "22 June , 2024"},
        {id : 2 , img :new2 , desc:"Laborum veritatis inventore nostrum odit id" , date : "10 May , 2024"},
        {id : 3 , img :new3 , desc:"Repellendus dolore inventore culpa excepturi, possimus." , date : "9 Apr , 2024"},

    ]

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
                <NewCard item={items}/>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default News
