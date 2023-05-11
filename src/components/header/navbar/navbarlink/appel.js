import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Appel = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsBoutonAppel {
        nom
        urlInscription
        actif
      }
    }
  `)
  const appel = data.datoCmsBoutonAppel.actif
  if ( appel === true) {

  return <a className="" rel="noreferrer" href={data.datoCmsBoutonAppel.urlInscription} target="_blank">
  <button className=" mx-auto lg:mx-0 w-max  bg-liono-green hover:opacity-90  
  font-bold text-white rounded-full  py-2 px-4 shadow-lg 
  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
>
  {data.datoCmsBoutonAppel.nom}
  </button>
  </a> 
}
else{
    return(
        <span></span>
    )
}
}
export default Appel






