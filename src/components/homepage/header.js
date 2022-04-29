import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsHomepage {
        imageHeaderUn {
          alt
          gatsbyImageData(width: 600, height: 600)
        }
        imageHeaderDeux {
          alt
          gatsbyImageData (width: 2500, height: 1500)
        }
        titreHeader
        paragrapheHeader
      }
    }
  `)
  return <article class=" w-12/12  pb-20 bg-secondary-color ">
  
  <div class="   flex flex-col flex-wrap md:flex-nowrap items-bottom gap-x-80  md:flex-row ">
  <div class=" w-5/12 h-min bg-fourth-color self-end pt-32 hidden md:block">
      <GatsbyImage image={data.datoCmsHomepage.imageHeaderUn.gatsbyImageData}
       alt={data.datoCmsHomepage.imageHeaderUn.alt}
       loading="lazy"
       className="w-full"
       />

    </div>
  
    <div class="flex m-2 md:py-0 bg-white  flex-col  md:absolute   md:w-1/3 p-4   z-50  left-32 bottom-28
    justify-center md:items-start text-center md:text-left order-2 md:order-2">
    
    <h2 class=" w-12/12 m-auto text-center text-third-color pt-2 font-bold title text-3xl mb-8">
      {data.datoCmsHomepage.titreHeader}
    </h2>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.paragrapheHeader }} />
    
    <a href="/#contact">
      <button class="mx-auto  lg:mx-0  
      bg-black  font-bold text-white 
      text-lg
      my-6 py-2 px-4 hover:bg-gray-600 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out">
        Parlons de votre projet{" "}
      </button>
    </a>
  </div>
    <div class="   md:p-20  bg-primary-color  md:mr-10 order-1 md:order-2">
        <GatsbyImage image={data.datoCmsHomepage.imageHeaderDeux.gatsbyImageData}
          className=" w-full   "
          alt={data.datoCmsHomepage.imageHeaderDeux.gatsbyImageData}
          loading="lazy"
          />
     
    </div>
    
  </div>

</article>
}

export default Header



