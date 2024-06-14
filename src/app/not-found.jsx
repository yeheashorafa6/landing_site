"use client";

import Image from "next/image";
import Link from "next/link";

function notFoundPage() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <Image src={"/assets/not-found.jpg"} width={400} height={400} alt="img"/>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link href={"/"}>
          <button className="p-3 bg-accent text-white mt-3 rounded-md">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default notFoundPage;
