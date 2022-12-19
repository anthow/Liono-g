import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
const Formations = ({ data }) => (
  <Layout>
    <Seo title="formations numériques eco-responsables" />

    <main class="w-12/12 m-auto ">
      {data.allDatoCmsFormation.edges.map(({ node }, i) =>
        i % 2 ? (
          <>
            <article class="w-12/12 bg-third-color p-5 md:p-20 flex flex-col md:grid grid-cols-2 gap-x-10">
              <div className="order-2 md:order-1">
                <h2 className=" text-2xl md:text-4xl text-white ">{node.titreFormation} </h2>
                <h3 className="my-5 text-xl text-white">
                  {" "}
                  {node.sousTitreFormation}
                </h3>
                <p
                  className=" "
                  dangerouslySetInnerHTML={{
                    __html: node.texteIntroductif,
                  }}
                ></p>
                <div class="flex items-center flex-col md:flex-row gap-4 mt-2 mb-8">
                  <Link rel="noreferrer"
                    className="mx-auto lg:mx-0 w-max  bg-white  
                    font-bold text-third-color rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    to={node.slug}
                  >
                    {" "}
                    En savoir plus
                  </Link>

                  <a
                    className="mx-auto lg:mx-0 w-max  bg-primary-color
                      font-bold text-white rounded-full  py-2 px-4 shadow-lg
                      focus:outline-none focus:shadow-outline
                      transform transition hover:scale-105 duration-300 ease-in-out"
                    href={node.lienInscription}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inscription
                  </a>
                  <Link rel="noreferrer"
                    className="mx-auto lg:mx-0 w-max  bg-fift-color  font-bold text-white rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    to={node.slug}
                  >
                    {" "}
                    Demande de formation
                  </Link>
                </div>
              </div>
              <figure className=" order-1 md:order-2 md:mb-20">
                <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                  alt={node.imageFormation.alt}
                />
              </figure>
            </article>
          </>
        ) : (
          <>
            <article class="w-12/12 bg-primary-color p-5 md:p-20 flex flex-col md:grid grid-cols-2 gap-x-10">
              <figure className="md:mb-20">
                <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                  alt={node.imageFormation.alt}
                />
              </figure>
              <div>
                <h2 className="text-2xl md:text-4xl text-white ">{node.titreFormation} </h2>
                <h3 className="my-5 text-xl md:text-2xl text-white">
                  {" "}
                  {node.sousTitreFormation}
                </h3>
                <p
                  className="  "
                  dangerouslySetInnerHTML={{
                    __html: node.texteIntroductif,
                  }}
                ></p>
                <div class="flex flex-col md:flex-row items-center gap-4 mt-2 mb-8">
                  <Link rel="noreferrer"
                    className="mx-auto lg:mx-0 w-max  
                    bg-white  font-bold text-third-color rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    to={node.slug}
                  >
                    {" "}
                    En savoir plus
                  </Link>
                  <a
                    className="mx-auto lg:mx-0 w-max  bg-third-color
                      font-bold text-white rounded-full  py-2 px-4 shadow-lg
                      focus:outline-none focus:shadow-outline
                      transform transition hover:scale-105 duration-300 ease-in-out"
                    href={node.lienInscription}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inscription
                  </a>
                  <Link rel="noreferrer"
                    className="mx-auto lg:mx-0 w-max
                      bg-fift-color  font-bold text-white rounded-full  
                      py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline 
                      transform transition hover:scale-105 duration-300 ease-in-out"
                    to={node.slug}
                  >
                    {" "}
                    Demande de formation
                  </Link>
                </div>
              </div>
            </article>
          </>
        )
      )}
    </main>
  </Layout>
)
export const query = graphql`
  {
    allDatoCmsFormation {
      edges {
        node {
          dateDeLEvenement
          duree
          enPratique
          formationPasPour
          formationPour
          introduction
          lienInscription
          lieu
          materiel
          nombreDeParticipants
          objectifsFormation
          seo {
            description
            title
            twitterCard
            image {
              gatsbyImageData
            }
          }
          slug
          sousTitreFormation
          texteIntroductif
          titreFormation
          imageFormation {
            alt
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Formations
