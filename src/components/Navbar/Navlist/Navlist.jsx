"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navlist({items}) {
  const [active , setActive] = useState("");


  return (
    <>
    {
        items.map((item)=>{
          return(
            <li key={item.id} className={`${item.title === "Home" ? 'mt-3 lg:mt-0' : ''} `}>
                <Link onClick={()=>{setActive(item.title)}} href={item.title === "Home" ? "/" : `/${item.title}`} className={`${active === item.title ?'text-accent' :""} text-[20px] hover:text-accent transition-all duration-300 m-10 lg:m-0`}>
                    {item.title}
                </Link> 
            </li>
          )
        })
    }
    </>
  )
}

export default Navlist

