import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const Page = ({ data }) => {
  const color = data.datoCmsLandingPageEntrepeneur.couleursTexte.hex
  const backgroundcolor =
    data.datoCmsLandingPageEntrepeneur.couleursBackground.hex
  const colorh1 = data.datoCmsLandingPageEntrepeneur.couleursTitre.hex
  //const bgH1 = data.datoCmsLandingPageVenement.bgH1.hex
  const colortextbutton = data.datoCmsLandingPageEntrepeneur.couleursTexteBouton
  const backgroundbutton =
    data.datoCmsLandingPageEntrepeneur.couleursBackgroundBouton.hex
  const backgroundtemoignage =
    data.datoCmsLandingPageEntrepeneur.couleursBackgroundTemoignage.hex
  const bgimage = {
    backgroundImage:
      "url(" + data.datoCmsLandingPageEntrepeneur.imageHero.fluid.src + ")",
  }

  return (
    <>
      <Layout>
        <main
          style={{ background: backgroundcolor }}
          className=" flex flex-col "
        >
          <article
            style={bgimage}
            className=" flex flex-row justify-end md:px-5 bg-cover md:py-10"
          >
            <section
              style={{ backgroundColor: "#b3bfa9cc" }}
              className="w-12/12 md:w-6/12 p-10 flex flex-col gap-5"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <h1 style={{ color: colorh1 }} className=" text-4xl">
                  {data.datoCmsLandingPageEntrepeneur.titreHero}{" "}
                </h1>
              </div>
              <div
                className=" text-lg "
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsLandingPageEntrepeneur.texteHero,
                }}
              ></div>
            </section>
          </article>
          <article
            style={{ background: backgroundtemoignage }}
            className=" flex flex-col   w-full place-items-center m-auto py-4"
          >
            <div className="flex flex-col items-center w-8/12 text-center">
              <p className="italic">
                {data.datoCmsLandingPageEntrepeneur.texteTMoignage}
              </p>
              <p className="text-xs">
                {data.datoCmsLandingPageEntrepeneur.nomTMoignage} -
                <a
                  target="_blank"
                  className="color-third-color"
                  href={data.datoCmsLandingPageEntrepeneur.urlActivit}
                >
                  {" "}
                  {data.datoCmsLandingPageEntrepeneur.nomDeLActivit}
                </a>
              </p>
            </div>
          </article>
          <article  className="flex flex-col items-center w-full m-auto py-20 ">
            <h2                   
 className="text-4xl text-center p-2 text-white bg-third-color">
              Nos packs
            </h2>
          </article>
          <article className="flex   md:w-10/12 m-auto flex-col items-baseline items-center md:grid md:grid-cols-3 gap-10">
            {data.allDatoCmsListePackEntrepreneur.edges.map(({ node }, i) => (
              <>
                <section
                  className="flex border bg-third-color shadow   flex-col"
                >
                  {/*} <GatsbyImage
                    image={node.imagePack.gatsbyImageData}
                    alt={node.imagePack.alt}
            /> {*/}
                  <div style={bgimage} className="text-white h-14 flex bg-third-color flex-col justify-items-center items-center content-center m-auto w-full">
                    <h3 className="text-center   text-xl  font-semi-black   px-2">
                      {node.titreDeLaFormation}
                    </h3>
                  </div>
                  <p
                    className="px-2 mt-10 text-m "
                    dangerouslySetInnerHTML={{
                      __html: node.description,
                    }}
                  ></p>
                  <p
                    className="px-2 "
                    dangerouslySetInnerHTML={{
                      __html: node.avantages,
                    }}
                  ></p>
                  <div className="items-center text-center">
                    <button className="text-white font-black bg-black my-5 p-2">
                      Contact
                    </button>
                  </div>
                </section>
              </>
            ))}
          </article>
        </main>
      </Layout>
    </>
  )
}
export const query = graphql`
  query {
    datoCmsLandingPageEntrepeneur {
      couleursBackground {
        hex
      }
      couleursBackgroundBouton {
        hex
      }
      couleursTexte {
        hex
      }
      couleursTexteBouton {
        hex
      }
      couleursTitre {
        hex
      }
      couleursBackgroundTemoignage {
        hex
      }
      imageHero {
        alt
        gatsbyImageData
        fluid {
          src
          srcSet
        }
      }
      imageTMoignage {
        alt
        gatsbyImageData(width: 150, height: 150)
      }
      nomDeLActivit
      nomTMoignage
      texteHero
      texteTMoignage
      titreHero
      urlActivit
    }
    allDatoCmsListePackEntrepreneur {
      edges {
        node {
          avantages
          description
          imagePack {
            alt
            gatsbyImageData
          }
          titreDeLaFormation
        }
      }
    }
  }
`

export default Page
