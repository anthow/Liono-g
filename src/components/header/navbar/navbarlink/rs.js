import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Appel from "./appel"
import { Link } from "gatsby"


export default function Rs() {
  return (
    <>
      <ul className="flex font-semibold w-3/12 md:w-11/12 flex-row items-center m-auto gap-2 ">

        <li>
          <Link to="/#contact">

            {" "}
            <FontAwesomeIcon
              className="text-m"
              icon={faEnvelope}
            />
          </Link>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Liono-106603081895565"
            target="_blank"
            without rel="noreferrer"
            class="py-2 px-2 hover:opacity-50" >
            {" "}
            <FontAwesomeIcon
              className="text-m "
              icon={faFacebook}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/liono.be/"
            target="_blank"
            without rel="noreferrer"
            class="py-2 px-2 hover:opacity-50"
          >
            {" "}
            <FontAwesomeIcon
              className="text-m "
              icon={faInstagram}
            />
          </a>
        </li>
        <li>
          <Appel />

        </li>
        <li className="hidden md:block">
          <a href="https://calendly.com/anthonyenglebert" target="_blank" rel="noreferrer" >
            <button class="mx-auto  lg:mx-0  
      bg-black  font-bold text-white 
      text-sm
      my-6 py-2 px-4 hover:bg-gray-600 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out">
              Prendre un RDV{" "}
            </button>
          </a>

        </li>
      </ul>

      <div className=" md:hidden">
        <a href="https://calendly.com/anthonyenglebert/videoconference" target="_blank" rel="noreferrer" >
          <button class="mx-auto  lg:mx-0  
 bg-black  font-bold text-white 
 text-sm
 my-6 py-2 px-4 hover:bg-gray-600 shadow-lg focus:outline-none focus:shadow-outline transform 
 transition hover:scale-105 duration-300 ease-in-out">
            Prendre un RDV{" "}
          </button>
        </a>

      </div>
    </>
  )
}
