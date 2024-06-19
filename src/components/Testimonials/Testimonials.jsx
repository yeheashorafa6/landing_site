"use client"
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import {testimonialItems} from "./../../../data/index";


function Testimonials() {

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

  // USE REF
  const prev = useRef(null)
  const next  = useRef(null)
  // == USE REF ==

  return (
    <motion.section  className="bg-white mt-[80px] xl:mt-[200px] relative z-20">
      <motion.div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.h2 variants={variantsx} initial="initial" whileInView="animate" className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          What clients say
        </motion.h2>

        <motion.div  className="mt-8 flex gap-4 lg:mt-0" variants={variantsx} initial="initial" whileInView="animate">
          <motion.button
            ref={prev}
            className=" rounded-full border border-accent p-3 text-accent transition hover:bg-accent hover:text-white"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="w-[30px] h-[30px] rounded-lg"
            />
          </motion.button>

          <motion.button
            ref={next}
            className="rounded-full border border-accent p-3 text-accent transition hover:bg-accent hover:text-white"
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className="w-[30px] h-[30px] rounded-lg"
            />
          </motion.button>
        </motion.div>
        <motion.div className="mt-8 " variants={variants} initial="initial" whileInView="animate">
            <Swiper
              navigation={{
                nextEl: prev.current,
                prevEl: next.current,
              }}
              pagination={{clickable : true}}
              modules={[Navigation, Pagination , Autoplay ]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prev.current;
                swiper.params.navigation.nextEl = next.current;
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
              className="mt-8 h-80 w-full rounded-lg"
            >
              {
              testimonialItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <TestimonialsCard item={item} />
                </SwiperSlide>
              ))
              }
            </Swiper>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Testimonials;
