import Link from 'next/link'
import React from 'react'

function Navlist({items}) {


  return (
    <>
    {
        items.map((item)=>{
          return(
            <li key={item.id} className={`${item.title === "Home" ? 'md:mt-3 lg:mt-0' : ''} `}>
                <Link href={item.title === "Home" ? "/" : `/${item.title}`} className='text-[20px] hover:text-accent transition-all duration-300 md:p-10 lg:p-0'>
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

