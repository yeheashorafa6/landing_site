"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faGithub , faInstagram , faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope  , faPhone , faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
function Footer() {
  const variantsy = {
    initial: {
      opacity: 0,
      y: 200,
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

<motion.footer variants={variantsy} initial="initial" whileInView="animate" className="bg-white">
  <motion.div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <motion.div className="flex flex-col lg:flex-row justify-between items-center gap-12">
      <motion.div className='text-center'>
        <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link href={"/"} >
                <Image src={"/assets/logo.svg"}  width={200} height={200} alt='logo'/>
            </Link>
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
        It is a long established fact that a reader will be distracted lookings.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-accent transition hover:text-accent/75" 
            >
              <FontAwesomeIcon icon={faFacebook}/>              
            </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-accent transition hover:text-accent/75"
            >
              <FontAwesomeIcon icon={faInstagram}/>              
                
            </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-accent transition hover:text-accent/75"
            >
              <FontAwesomeIcon icon={faWhatsapp}/>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-accent transition hover:text-accent/75"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </Link>
          </li>
        </ul>
      </motion.div>

      <motion.div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 ">
          <motion.div className="text-center sm:text-left mb-12 lg:mb-0">
            <motion.p className="text-2xl font-medium text-gray-900">Our Pages</motion.p>

            <motion.ul className="mt-8 space-y-4 text-sm">
              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#">
                  About
                </Link>
              </motion.li>

              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#">
                  Testimonials
                </Link>
              </motion.li>

              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#">
                  Our Works
                </Link>
              </motion.li>

              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#">News</Link>
              </motion.li>
              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#">Contact</Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div className="text-center sm:text-left mb-12 lg:mb-0">
            <motion.p className="text-2xl font-medium text-gray-900">Our Services</motion.p>

            <motion.ul className="mt-8 space-y-4 text-sm">
              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#">
                  Kitchen
                </Link>
              </motion.li>

              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#"> Living Area </Link>
              </motion.li>

              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#"> Bathroom </Link>
              </motion.li>

              <motion.li>
                <Link className="text-gray-700 transition hover:text-gray-700/75 text-lg" href="#"> Bedroom </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div className="text-center sm:text-left mb-12 lg:mb-0">
            <motion.p className="text-2xl font-medium text-gray-900">Contact Us</motion.p>

            <motion.ul className="mt-8 space-y-4 text-sm">
              <motion.li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="#"
                >
                  <FontAwesomeIcon icon={faEnvelope} className='text-lg text-accent transition hover:text-accent/75 cursor-pointer'/>

                  <motion.span className="flex-1 text-gray-700 text-lg">yeheashorafa6@gmail.com</motion.span>
                </Link>
              </motion.li>

              <motion.li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="#"
                >
                  <FontAwesomeIcon icon={faPhone} className='text-lg text-accent transition hover:text-accent/75 cursor-pointer'/>

                  <motion.span className="flex-1 text-gray-700 text-lg">+972 569 353 191</motion.span>
                </Link>
              </motion.li>

              <motion.li
                className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              >
                <FontAwesomeIcon icon={faLocationDot} className='text-lg text-accent transition hover:text-accent/75 cursor-pointer'/>
                <address className="-mt-0.5 flex-1 not-italic text-gray-700 text-lg">
                  Remal, Gaza, Palestine
                </address>
              </motion.li>
            </motion.ul>
          </motion.div>
      </motion.div>
    </motion.div>

    <motion.div className="mt-12 border-t border-gray-100 pt-6">
      <motion.div className="text-center sm:flex sm:justify-between sm:text-left">
        <motion.p className="text-sm text-gray-500">
          <motion.span className="block sm:inline">All rights reserved. Design By | 
          <motion.span className='hover:text-accent cursor-pointer'> Yehea Shorafa</motion.span></motion.span>
        </motion.p>

        <motion.p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Y - S Company
          </motion.p>
      </motion.div>
    </motion.div>
  </motion.div>
</motion.footer>
  )
}

export default Footer