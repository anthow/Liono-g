import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const formation = ({ data }) => (
  <>
    <Layout>
    <article class=" w-12/12 p-4 md:p-0  flex flex-col md:grid grid-cols-2 pb-20 bg-primary-color ">

    <section class="flex m-2 md:py-0   flex-col   h-min     p-4  
    justify-center md:items-start  order-2 md:order-1"
          >
            <h2 class=" w-12/12 m-auto text-center text-white pt-2 font-bold title text-3xl mb-8">
              {data.datoCmsFormation.titreFormation}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormation.introduction,
              }}
            />
                      </section>

          <section class="   md:p-20  bg-primary-color col-span-2  md:mr-10 order-1 md:order-2">
            <GatsbyImage
              image={data.datoCmsFormation.imageFormation.gatsbyImageData}
              className="w-full"
              alt={data.datoCmsFormation.imageFormation.gatsbyImageData}
              loading="lazy"
            />
          
          </section>
      </article>
    </Layout>
  </>
)


export const query = graphql`
query FormationQuery($slug: String) {
  
  
    datoCmsFormation(slug: { eq: $slug })
     {
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
`

export default formation
