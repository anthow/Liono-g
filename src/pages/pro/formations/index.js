import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const ProFormations = ({ data }) => (
  <Layout>
    <Seo title="formations numériques eco-responsables" />

    <main className="w-12/12 m-auto ">
      {data.allDatoCmsFormationPro.edges.map(({ node }, i) =>
        i % 2 ? (
          <>
             <article className=" w-12/12 bg-primary-color flex flex-col  md:grid  grid-cols-7  ">
    <section className="md:col-span-6 bg-primary-color  flex flex-col  md:grid grid-cols-2  ">
    <figure className=" h-full order-1 md:order-2">
                <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                  alt={node.imageFormation.alt}
                  className="h-full"
                />
              </figure>
             
              <div className="md:bg-white order-2 md:order-1 p-10 flex flex-col gap-y-5">
                <h2 className="text-3xl text-white md:text-third-color font-black   ">{node.titreFormation} </h2>
                <p
                  className="  "
                  dangerouslySetInnerHTML={{
                    __html: node.introduction,
                  }}
                ></p>
                <div className="flex items-center gap-x-4  ">
                  <Link rel="noreferrer"
                    className="mx-auto  lg:mx-0  
                    bg-black  font-bold text-white 
                    text-lg
                    my-6 py-2 px-4 hover:bg-gray-600 shadow-lg focus:outline-none focus:shadow-outline transform 
                    transition hover:scale-105 duration-300 ease-in-out"
                    to={node.slug}
                  >
                    {" "}
                    En savoir plus
                  </Link>
                  
                </div>

              </div>
              
              <div className="w-12/12 bg-secondary-color py-20 hidden md:blockcol-span-2"></div>

          </section>

          <section className="bg-secondary-color col-span-1 hidden md:block"></section>

            </article>
          
          </>
        ) : (
          <>
    <article className=" w-12/12 bg-secondary-color flex flex-col  md:grid  grid-cols-7  ">
    <section className="bg-primary-color col-span-1 hidden md:block"></section>
    <section className="col-span-6 bg-secondary-color flex flex-col md:grid grid-cols-2  gap-y-10">

              <figure className=" h-full">
                <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                  alt={node.imageFormation.alt}
                  className="h-full"
                />
              </figure>
              <div className="md:bg-white p-10 flex flex-col gap-y-5">
                <h2 className="text-3xl text-white md:text-third-color font-black   ">{node.titreFormation} </h2>
                <p
                  className="  "
                  dangerouslySetInnerHTML={{
                    __html: node.introduction,
                  }}
                ></p>
                <div className="flex items-center gap-x-4  ">
                  <Link rel="noreferrer"
                    className="mx-auto  lg:mx-0  
                    bg-black  font-bold text-white 
                    text-lg
                    my-6 py-2 px-4 hover:bg-gray-600 shadow-lg focus:outline-none focus:shadow-outline transform 
                    transition hover:scale-105 duration-300 ease-in-out"
                    to={node.slug}
                  >
                    {" "}
                    En savoir plus
                  </Link>
                  
                </div>
              </div>
          </section>
            </article>
            <article className="w-12/12 py-20 hidden md:block bg-primary-color"></article>
            
          </>
        )
      )}
    </main>
  </Layout>
)
export const query = graphql`
   {
    allDatoCmsFormationPro {
      edges {
        node {
          description
          duree
          introduction
          materiel
          imageFormation {
            alt
            gatsbyImageData
          }
          nombreDeParticipants
          objectifsFormation
          titreFormation
          slug
          programme
          prix
        }
      }
    }
  }
`


export default ProFormations
