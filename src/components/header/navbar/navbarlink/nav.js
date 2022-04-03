import React from "react"
import { Link } from "gatsby"
export default function Nav() {
  return (
    <header className=" p-10 flex flex-col md:flex-row justify-between">
      <ul className="flex flex-col gap-x-4 m-auto md:flex-row">
        <li>
          <Link to="/#service">
            <a
              className="
              py-4
              px-2
              text-liono-green
              font-semibold
              text-lg
              hover:text-liono-yellow
              transition
              duration-300"
            >
              Nos services
            </a>
          </Link>
        </li>
        <li>
          <Link to="/#engagement">
            <a
              className="
              py-4
              px-2
              text-liono-green
              font-semibold
              text-lg
              hover:text-liono-yellow
              transition
              duration-300"
            >
              Nos Engagments
            </a>
          </Link>
        </li>
        <li>
          <Link to="/#contact">
            <a
              className="
              py-4
              px-2
              text-liono-green
              font-semibold
              text-lg
              hover:text-liono-yellow
              transition
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
              text-liono-green
              font-semibold
              text-lg
              hover:text-liono-yellow
              transition
              duration-300
              "

            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
