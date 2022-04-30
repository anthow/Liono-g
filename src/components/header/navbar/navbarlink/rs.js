import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Appel from "./appel"
import { Link } from "gatsby"


export default function Rs() {
  return (
    <ul className="flex font-semibold w-3/12 md:w-12/12 flex-row items-center m-auto gap-2 ">
     
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
          class="py-2 px-2               hover:opacity-50
          "
        >
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
          class="py-2 px-2               hover:opacity-50
          "
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
    </ul>
  )
}
