"use client";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";
import {testimonialItems} from "./../../../data/index";
import { motion } from "framer-motion";
function TestimonialsPage() {
  const variants_x = {
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
  const init={
    email : "",
    username : "",
    message : "",
  }

  return (
    <motion.section className="bg-white">
      <motion.div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.h2 variants={variantsx} initial="initial" whileInView="animate" className="text-center text-4xl text-accent font-bold tracking-tight  sm:text-5xl">
          Read trusted reviews from our customers
        </motion.h2>

        <motion.div variants={variants_x} initial="initial" whileInView="animate" className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonialItems.map((item) => {
            return (
              <motion.div key={item.id}>
                <TestimonialsCard items={item} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default TestimonialsPage;
