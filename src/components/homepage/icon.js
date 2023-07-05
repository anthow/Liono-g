import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStaticQuery, graphql, Link } from "gatsby"
import {
    faLaptop,
    faPersonCircleQuestion,
    faPeopleGroup,
    faCalendarDays
   
  } from '@fortawesome/free-solid-svg-icons'


const Icon = () => {
  const data = useStaticQuery(graphql`
 {
    datoCmsHomepage {
      titreAccompagnementNumRique
      titreFormationNumRique
      titreSiteInternet
      texteAccompagnementNumRique
      texteFormationNumRique
      texteSiteInternet
    }
  }
  `)
  return <article className=" w-12/12 py-20  flex flex-col gap-10 bg-secondary-color  ">
    <h2 className="text-3xl bg-third-color text-white px-2  w-max m-auto">Je souhaite: </h2>
      <div className=" flex flex-col md:grid grid-cols-4 gap-x-20 w-10/12 m-auto">
      <Link to="/site-internet">
      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faLaptop} size="4x" className="" />          
      <h3 className="text-xl h-30 bg-third-color text-white px-2"> créer un site Internet </h3>

      </section>
      </Link>   


      <Link to="/formations">

      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faPersonCircleQuestion} size="4x" className="" />          
      <h3 className="text-xl h-30 bg-third-color text-white px-2"> Suivre une formation sur le numérique </h3>
      </section>
      </Link>

      <Link to="/accompagnement">

      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faPeopleGroup} size="4x" className="" />          
      <h3 className="text-xl h-30 bg-third-color text-white px-2"> Profiter d'un accompagnement digital </h3>
      </section>
      </Link>


      <a href="https://tally.so/r/mRd2QP" target=" _blank " rel="noopener noreferrer">
      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faCalendarDays} size="4x" className="" />          
      <h3 className="text-xl h-30 bg-third-color text-white px-2"> Ëtre tenu au courant des prochains webinaires/événements</h3>
      </section>
      </a>

      </div>

</article>
}

export default Icon



