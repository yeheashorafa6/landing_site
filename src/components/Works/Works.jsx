"use client"
import work1 from "./../../../public/assets/work/01.png";
import work2 from "./../../../public/assets/work/02.png";
import work3 from "./../../../public/assets/work/03.png";
import work4 from "./../../../public/assets/work/04.png";
import WorkCard from './WorkCard/WorkCard';
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// impoer motion
import { motion } from "framer-motion";


function Works() {
    const items = [
        {id : 1 , img : work1 , title : "Modren Kitchen" , subtitle : "Deco/Architecture" , desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt" , date : "10th Oct 2024"},
        {id : 2 , img : work2 , title : "Excepturi est" , subtitle : "Deco/Excepturi" , desc : "impedit, modi delectus deleniti fugit quae consectetur totam?" , date : "9th Apr 2024"},
        {id : 3 , img : work3 , title : "dolor sit amet" , subtitle : "Deco/deleniti" , desc : "Excepturi est vitae, quidem id optio veniam officiis delectus atque" , date : "24th May 2024"},
        {id : 4 , img : work4 , title : "quidem id optio" , subtitle : "Deco/consectetur" , desc : " nisi animi quidem id optio veniam officiis delectus atque est vitae" , date : "15th Juny 2024"},
    ]
    const variants = {
        initial: {
          opacity: 0,
          x:500
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
          x:-500
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
                            items.map((item) => (
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

