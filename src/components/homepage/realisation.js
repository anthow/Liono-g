import { GatsbyImage } from "gatsby-plugin-image"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Realisation = () => {
  const data = useStaticQuery(graphql`
   {
    allDatoCmsRealisation(limit: 4, sort: {fields: originalId, order: ASC}) {
      edges {
        node {
          url
          titre
          image {
            alt
            gatsbyImageData(aspectRatio: 1.8)
          }
        }
      }
    }
  }
  `)
  return <article className=" w-12/12  py-20 bg-secondary-color ">
      <section className="flex flex-col w gap-y-10">
     <h2 className="text-3xl bg-primary-color  text-white w-full md:w-max px-2">
          Nos Dernières réalisations 
        </h2>
        <div className="w-10/12 m-auto flex flex-col gap-y-10 md:gap-20 md:grid grid-cols-2 auto-rows-max">
        {data.allDatoCmsRealisation.edges.map(({ node }) => {
            return (
              <a href={node.url} target="_blank" rel="noreferrer" >
              <div className="container">
    
              <GatsbyImage image={node.image.gatsbyImageData} alt={node.image.alt} />
               <div className="overlay">
        <div className="text"><h3 className=" bg-third-color px-2 text-white text-3xl font-semibold">{node.titre}</h3></div>
      </div>
              </div></a>
            )
        })}





   
         
          </div>
      

</section>

</article>
}

export default Realisation



