"use client"
import WorkCard from './WorkCard/WorkCard';
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// impoer motion
import { motion } from "framer-motion";
import {WorksItems} from "./../../../data/index"


function Works() {
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
            <motion.div variants={variantsx} initial="initial" whileInView="animate">
                <Swiper
                    pagination={{clickable : true}}
                    modules={[Navigation, Pagination , Autoplay ]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        // when window width is >= 1024px
                        1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        },
                            }}
                        
                        >
                            {
                            WorksItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                <WorkCard item={item} />
                                </SwiperSlide>
                            ))
                            }
                </Swiper>
            </motion.div>
        </div>
    </section>
  )
}

export default Works

