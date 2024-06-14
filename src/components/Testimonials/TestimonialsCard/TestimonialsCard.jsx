"use client"
import Image from 'next/image'
import React from 'react'

import {  SwiperSlide } from "swiper/react";

function TestimonialsCard({item}) {
  return (
    <>

        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8" >
            <div className="flex items-center gap-4">
                <Image
                    alt=""
                    width={50}
                    height={50}
                    src={item.img}
                    className="size-14 rounded-full object-cover"
                />

                <div>
                    <div className="flex justify-center gap-1 text-yellow-500">
                        <h3>{item.name}</h3>
                    </div>

                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">{item.place}</h3>
                </div>
            </div>

            <p className="mt-4 text-gray-700">{item.subject}</p>
    </blockquote>

    </>
  )
}

export default TestimonialsCard
