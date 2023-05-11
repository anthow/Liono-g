import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
const Formations = ({ data }) => {
  const bgimage = {
    backgroundImage:
      "url(" +
      data.datoCmsPageNouvelleFormation.illustrationPage.fluid.src +
      ")",
  }
  return (
    <Layout>
      <Seo title="formations numériques eco-responsables" />
      <article className=" w-12/12 p-4 md:p-0  pb-20 bg-secondary-color ">
        <section
          style={bgimage}
          className="  md:w-12/12 py-4 gap-y-5 md:py-20 m-auto  md:items-center md:pl-10  flex flex-col  lg:grid grid-cols-2 "
        >
          {/*}
  <div className=" w-5/12 h-min bg-fourth-color self-end pt-32 hidden md:block">
      <GatsbyImage image={data.datoCmsHomepage.imageHeaderUn.gatsbyImageData}
       alt={data.datoCmsHomepage.imageHeaderUn.alt}
       loading="lazy"
       className="w-full"
       />

    </div>
  {*/}
          <div
            className="flex m-2  bg-white  flex-col col-span-1 h-min     p-4  
    justify-center md:items-start  order-2 md:order-1 text-center "
          >
            <h2 className=" w-12/12 m-auto text-center text-third-color pt-2 font-bold title text-2xl mb-8">
              {data.datoCmsPageNouvelleFormation.titreDeLaPage}
            </h2>
            <div
              className="paraphcenter text-center"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageNouvelleFormation.textePage,
              }}
            />
          </div>
        </section>
      </article>
      <article className=" w-12/12  py-20 bg-secondary-color ">
        <section className="flex flex-col w gap-y-10">
          <h2 className="text-3xl bg-primary-color  text-white w-full md:w-max px-2">
            Nos Formations
          </h2>
          <div className="w-10/12 m-auto flex flex-col gap-y-10 md:gap-20 md:grid grid-cols-2 auto-rows-max">
            {data.allDatoCmsListeModuleFormation.edges.map(({ node }) => {
              return (
                <div className=" bg-white p-4 flex flex-col gap-5">
                  {/*}  <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                    alt={node.imageFormation.alt}
              />{*/}
                  <h3 className=" bg-third-color px-2 text-white text-3xl font-semibold">
                    {node.titreFormation}
                  </h3>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: node.descriptifFormation,
                    }}
                  />
                  <button className="text-white font-black w-max bg-black my-5 p-2">
                    <a
                      href={node.urlInscription}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {node.texteBoutonInscription}
                    </a>
                  </button>
                </div>
              )
            })}
          </div>
        </section>
      </article>
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

export default Formations
