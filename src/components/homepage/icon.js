import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStaticQuery, graphql } from "gatsby"
import {
    faLaptop,
    faPersonCircleQuestion,
    faScreenUsers,
    faPeopleGroup,
   
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
  return <article class=" w-12/12 py-20   bg-primary-color flex  ">
      <div className=" flex flex-col md:grid grid-cols-3 gap-x-20 w-10/12 m-auto">
      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faLaptop} size="4x" className="" />          
      <h2 className="text-3xl bg-third-color text-white px-2"> {data.datoCmsHomepage.titreSiteInternet} </h2>
          
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteSiteInternet }} />

      </section>
     
      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faPersonCircleQuestion} size="4x" className="" />          
      <h2 className="text-3xl bg-third-color text-white px-2"> {data.datoCmsHomepage.titreFormationNumRique} </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteFormationNumRique }} />
      </section>

      <section className="flex flex-col text-center items-center gap-y-5">
      <FontAwesomeIcon icon={faPeopleGroup} size="4x" className="" />          
      <h2 className="text-3xl bg-third-color text-white px-2"> {data.datoCmsHomepage.titreAccompagnementNumRique} </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteAccompagnementNumRique }} />
      </section>
  
      </div>

</article>
}

export default Icon



