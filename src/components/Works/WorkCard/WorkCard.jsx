import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function WorkCard({ item }) {
  return (
    <article className="relative overflow-hidden rounded-[45px] shadow transition hover:shadow-lg mb-12">
      <Image
        fill
        alt=""
        src={item.img}
        className="absolute inset-0 h-full w-full object-cover rounded-[45px]"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <h4  className="block text-xs text-white/90">{item.date}</h4>
          <Link href="#">
            <h3 className="mt-0.5 text-lg text-white">{item.title}</h3>
          </Link>
          <h3 className="text-accent">{item.subtitle}</h3>
          <p className="mt-2 line-clamp-2 text-sm/relaxed text-white/95">
            {item.desc}
          </p>
          <button className="flex items-center my-3 p-2 bg-accent text-white rounded-lg transition-all duration-300">
                Show More 
                <span className="ml-2 mt-1 transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRightLong} className="mr-2 "/>
                </span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default WorkCard;
