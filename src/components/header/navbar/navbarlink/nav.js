import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <ul className=" md:pt-4 flex flex-col gap-x-4 m-auto items-center md:flex-row   font-semibold ">
      <li>
        <Link rel="noreferrer" to="/site-internet">
          <p
            className="
               
              text-black
              hover:text-gray-600
              transition
              duration-300
              text-center
              "
          >
            site internet
          </p>
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="/formations">
          <p
            className="
               
              text-black
              hover:text-gray-600
              transition
              duration-300
              text-center
              "
          >
            Formations
          </p>
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="/accompagnement">
          <p
            className="
               
              text-black
              hover:text-gray-600
              transition
              
              duration-300"
          >
            Accompagnement
          </p>
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="/webinaire/decouverte-de-l-outil-focalboard">
          <p
            className="
               
              text-black
              hover:text-gray-600
              transition
              hidden
              duration-300"
          >
            Webinaire
          </p>
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="/#contact">
          <p
            className="
               
              transition
              hover:text-gray-600
              duration-300"
          >
            Contact
          </p>
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="/blog">
          <p
            className="
               
              text-black
              hover:text-gray-600
              transition
              duration-300
              "
          >
            Blog
          </p>
        </Link>
      </li>
      <li></li>
    </ul>
  )
}
