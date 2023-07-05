import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Webinaire = ({ data }) => {
  
  return (
    <Layout>
      <Seo title="formations numériques eco-responsables" />
      coucou
     
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsListeModuleFormation {
      edges {
        node {
          descriptifFormation
          imageFormation {
            alt
            gatsbyImageData(height: 200)
          }
          texteBoutonEnSavoirPlus
          texteBoutonInscription
          titreFormation
          prix
          urlInscription
        }
      }
    }
    datoCmsPageNouvelleFormation {
      titreDeLaPage
      textePage
      illustrationPage {
        fluid {
          src
        }
      }
    }
  }
`

export default Webinaire
