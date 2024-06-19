"use client"
import WorkCard from './WorkCard/WorkCard';
import {WorksItems} from "./../../../data/index"
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// impoer motion
import { motion } from "framer-motion";


function WorksPage() {
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
    <section className=' mt-[80px] xl:mt-[150px] relative z-20'>
        <div className="container mx-auto">
            <motion.div className="my-10 text-center" variants={variants} initial="initial" whileInView="animate">
                <motion.h1 className="text-4xl font-semibold text-accent">Our Works</motion.h1>
                <motion.p className="mb-10 mt-3 text-gray-400 font-light text-xl max-w-3xl mx-auto"> It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</motion.p>
            </motion.div>
            <motion.div variants={variantsx} initial="initial" whileInView="animate"
            className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {
                      WorksItems.map((item) => {
                        return (
                          <div key={item.id} className="">
                            <WorkCard item={item} />
                          </div>
                        )
                      })
                    }
            </motion.div>
        </div>
    </section>
  )
}

export default WorksPage

