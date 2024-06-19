"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navlist from './Navlist/Navlist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import {navbarItems} from "./../../../data/index";

function Navbar() {
  // STATE
  const [openMenu, setOpenMenu] = useState(false);
  // == STATE ==


  //  FUNCTIONS

  const HandelClickOpenMenu = () =>{
    setOpenMenu(!openMenu)
  }
  const variants={
    visible : {opacity : 1},
    hidden : {opacity :0}
} 
  // == FUNCTIONS ==
  return (
    <motion.header variants={variants} initial="hidden" animate="visible" transition={{duration : 2}} className='sticky top-0 h-[90px] shadow-lg z-30 bg-white overflow-x-hidden'>
        <div className="container mx-auto flex justify-between h-full items-center">
          {/* LOGO */}
          <div>
              <Link href={"/"} >
                <Image src={"/assets/logo.png"}  width={80} height={80} alt='logo'/>
              </Link>
          </div> 
          {/* NAV */}
          <div className="">
            <div className="lg:hidden cursor-pointer" onClick={HandelClickOpenMenu}>
                <FontAwesomeIcon icon={faBarsStaggered} className='text-4xl text-primary w-[40px] ' />
            </div>
            <ul className={`fixed flex w-full bg-white overflow-hidden border-t flex-col left-0 top-[90px] transition-all duration-500
             right-0 gap-5 lg:relative lg:flex-row lg:p-0  lg:top-0 lg:border-none lg:h-full ${openMenu === true ? 'h-[310px]' : 'h-0'} rounded-b-lg`}>
              <Navlist items={navbarItems}/>
              
            </ul>
          </div>
        </div>
    </motion.header>
  )
}

export default Navbar
