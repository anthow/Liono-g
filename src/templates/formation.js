import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const formation = ({ data }) => (
  <>
    <Layout>
      {data.datoCmsFormation.introduction}
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
