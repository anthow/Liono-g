import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Rs() {
  return (
    <ul className="grid grid-cols-4 m-auto gap-2 ">
      <li>
        <a
          href="mailto:info@liono.be
?subject=Demande de contact"
          class="py-2 px-2 "
        >
          {" "}
          <FontAwesomeIcon
            className="text-2xl hover:text-liono-yellow text-liono-blue"
            icon={faEnvelope}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/Liono-106603081895565"
          target="_blank"
          class="py-2 px-2 "
        >
          {" "}
          <FontAwesomeIcon
            className="text-2xl hover:text-liono-yellow text-liono-blue"
            icon={faFacebook}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/liono.be/"
          target="_blank"
          class="py-2 px-2"
        >
          {" "}
          <FontAwesomeIcon
            className="text-2xl hover:text-liono-yellow text-liono-blue"
            icon={faInstagram}
          />
        </a>
      </li>
    </ul>
  )
}
