import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <header className=" p-10 flex  font-semibold  flex-col md:flex-row justify-between">
      <ul className="flex flex-col gap-x-4 m-auto items-center md:flex-row">
        <li>
          <Link rel="noreferrer" to="/site-internet">
            <p
              className="
              py-4
              px-2
              text-black
              hover:text-gray-600
              transition
              duration-300
              "
              
            >
             Réalisation de site internet
            </p>
          </Link>
        </li>
        <li>
          <Link rel="noreferrer" to="/#engagement">
            <p
              className="
              py-4
              px-2
              text-black
              hover:text-gray-600
              transition
              hidden
              duration-300"
            >
              Formations numérique 
            </p>
          </Link>
        </li>
        <li>
          <Link rel="noreferrer" to="/accompagnement">
            <p
              className="
              py-4
              px-2
              text-black
              hover:text-gray-600
              transition
              
              duration-300"
            >
              accompagnement digtal 
            </p>
          </Link>
        </li>
        <li>
          <Link rel="noreferrer" to="/#contact">
            <p
              className="
              py-4
              px-2
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
              py-4
              px-2
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
        <li>
        </li>
      </ul>
    </header>
  )
}
