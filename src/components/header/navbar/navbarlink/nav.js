import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <header className=" p-10 flex  font-semibold  flex-col md:flex-row justify-between">
      <ul className="flex flex-col gap-x-4 m-auto items-center md:flex-row">
        <li>
          <Link to="/site-internet">
            <a
              className="
              py-4
              px-2
              text-black
              hover:text-gray-600
              transition
              duration-300
              "
              
            >
             réalisation de site internet
            </a>
          </Link>
        </li>
        <li>
          <Link to="/#engagement">
            <a
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
            </a>
          </Link>
        </li>
        <li>
          <Link to="/#engagement">
            <a
              className="
              py-4
              px-2
              text-black
              hover:text-gray-600
              transition
              hidden
              duration-300"
            >
              accompagnement numérique 
            </a>
          </Link>
        </li>
        <li>
          <Link to="/#contact">
            <a
              className="
              py-4
              px-2
              transition
              hover:text-gray-600
              duration-300"
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <a
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
            </a>
          </Link>
        </li>
        <li>
        </li>
      </ul>
    </header>
  )
}
