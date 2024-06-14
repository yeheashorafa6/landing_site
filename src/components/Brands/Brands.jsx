"use client"
import Image from 'next/image'
import React from 'react'
import brands1 from "./../../../public/assets/brands/01.svg"
import brands2 from "./../../../public/assets/brands/02.svg"
import brands3 from "./../../../public/assets/brands/03.svg"
import brands4 from "./../../../public/assets/brands/04.svg"
import brands5 from "./../../../public/assets/brands/05.svg"
import { motion } from 'framer-motion'



function Brands() {

  const images = [
    {id : 1 ,  image :brands1},
    {id : 2 ,  image :brands2},
    {id : 3 ,  image :brands3},
    {id : 4 ,  image :brands4},
    {id : 5 ,  image :brands5},

  ]

  const variantsx = {
    initial: {
      opacity: 0,
      y: -100,
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
   <motion.section variants={variantsx} initial="initial" whileInView="animate" className=' mt-[80px] xl:mt-[150px] relative z-20'>
      <motion.div className="container mx-auto">
        <motion.div className='text-center'>
          <motion.h1 className='text-4xl text-accent font-semibold lg:mb-3 mb-6'>Our Brands</motion.h1>
        </motion.div>
        <motion.div className="flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-12">
          {
            images.map((item) => {
              return (
                <motion.div className="mx-auto hover:scale-125 ease-in-out transition-all duration-500 cursor-pointer " key={item.id}>
                  <Image src={item.image} width={120} height={120} alt="brands" />
                </motion.div>
              )
            })
          }
        </motion.div>
      </motion.div>
   </motion.section>
  )
}

export default Brands
