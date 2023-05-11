import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
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
          gatsbyImageData (width: 2500, height: 1500,    
)
        }
        titreHeader
        paragrapheHeader
      }
    }
  `)
  return <article className=" w-12/12 p-4 md:p-0  pb-20 bg-secondary-color ">
  
  <section  className="  md:w-12/12 py-4 gap-y-5 md:py-0 m-auto bg-primary-color md:items-center md:pl-10  flex flex-col  lg:grid grid-cols-3 ">
    {/*}
  <div className=" w-5/12 h-min bg-fourth-color self-end pt-32 hidden md:block">
      <GatsbyImage image={data.datoCmsHomepage.imageHeaderUn.gatsbyImageData}
       alt={data.datoCmsHomepage.imageHeaderUn.alt}
       loading="lazy"
       className="w-full"
       />

    </div>
  {*/}
    <div className="flex m-2 md:py-0 bg-white  flex-col col-span-1 h-min     p-4  
    justify-center md:items-start  order-2 md:order-1">
    
    <h2 className=" w-12/12 m-auto text-center text-third-color pt-2 font-bold title text-3xl mb-8">
      {data.datoCmsHomepage.titreHeader}
    </h2>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.paragrapheHeader }} />
    
    <Link rel="noreferrer" href="/#contact">
      <button className="mx-auto  lg:mx-0  
      bg-black  font-bold text-white 
      text-lg
      my-6 py-2 px-4 hover:bg-gray-600 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out">
        Parlons de votre projet{" "}
      </button>
    </Link>
  </div>
    <div className="   md:p-20  bg-primary-color col-span-2  md:mr-10 order-1 md:order-2">
        <GatsbyImage image={data.datoCmsHomepage.imageHeaderDeux.gatsbyImageData}
          className=" w-full   "
          alt={data.datoCmsHomepage.imageHeaderDeux.gatsbyImageData}
          loading="lazy"
          />
     
    </div>
    
  </section>

</article>
}

export default Header



