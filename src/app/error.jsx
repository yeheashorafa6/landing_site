"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function error() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <Image src={"/assets/not-found.jpg"} width={400} height={400} />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-red-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-red-500">We can't find that page.</p>

        <Link href={"/"}>
          <button className="p-3 bg-red-200 text-white mt-3 rounded-md">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default error
