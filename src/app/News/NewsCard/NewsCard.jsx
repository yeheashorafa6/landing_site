import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NewsCard({ item }) {
  return (
    <Link
      className="block rounded-xl border bg-black border-accent p-8 shadow-md transition hover:border-accent hover:shadow-accent"
      href="#"
    >
        <FontAwesomeIcon  className="size-7 text-accent" icon={item.icon}/>

        <h2 className="mt-4 text-xl font-bold text-white">{item.title}</h2>

        <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
    </Link>
  );
}

export default NewsCard;
