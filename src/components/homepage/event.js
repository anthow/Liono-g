import { StaticImage } from "gatsby-plugin-image"
import React from "react"
//import { useStaticQuery, graphql } from "gatsby"

const Event = () => {
  /*const data = useStaticQuery(graphql`
    {
      allDatoCmsFormation {
        edges {
          node {
            titreFormation
            texteIntroductif
            imageFormation {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  `)*/
  return (
    <article className=" w-12/12 s  md:grid gap-x-20 grid-cols-4  ">
      <section className="bg-secondary-color col-span-1 hidden md:block"></section>
      <section className="col-span-3 py-20 flex flex-col gap-y-10">
        <h2 className="text-3xl bg-third-color text-white w-full md:w-max px-2">
          Notre prochain événement
        </h2>
        <div className="flex flex-col gap-x-10 md:grid grid-cols-2">
          <div className="fex flex-col space-y-5 order-2 md:order-1">
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl">
                Pratiques numériques écoresponsables… ou comment réduire notre
                empreinte écologique sans sacrifier nos outils digitaux
              </h3>
              <p className="text-sm italic">Le 10 juin 2023 de 13h à 17h - Namur </p>
            </div>
            <p>
              Anthony Englebert, fondateur de l'agence Liono, animera une
              présentation sur l'impact écologique du numérique et comment
              choisir des outils logiciels et matériels plus vertueux pour
              réduire notre empreinte écologique. Il donnera des conseils pour
              réduire notre consommation d'énergie et adopter de bonnes
              pratiques pour notre utilisation quotidienne du numérique.
            </p>
            <div className="flex  md:space-x-4">
              <button
                className="mx-auto  lg:mx-0  
      bg-black hover:bg-gray-600  font-bold text-white 
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max"
              >
                <a href="https://framaforms.org/inscription-a-levenement-du-10062023-1683400527" target=" _blank" rel="noopener">
                  
                  Inscription{" "}
                </a>
              </button>
              <button
                className="mx-auto  lg:mx-0  
      bg-black hover:bg-gray-600  font-bold text-white 
      text-lg
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out"
              >
                                <a href="https://www.facebook.com/ZoheWomenEconomy/posts/pfbid02ZaFdTUdYwuAxxtgEfXM1g5nBw6L4xj35RUP2Vfg3Bykt3mZYMPGmsfuntf8tybMl" target=" _blank" rel="noopener">

                En savoir plus{" "}
                </a>
              </button>
            </div>
          </div>{" "}
          <StaticImage
            loading="lazy"
            src="https://res.cloudinary.com/liono/image/upload/v1683610652/VISUEL_annonce_pour_pages_FB_et_LinkedIn_1_wka45f.webp"
            alt="Image de l'événement sur le numérique responsable à Namur le 10 juin 2023"
            className="h-full order-1 md:order-2"
          />
        </div>
      </section>
    </article>
  )
}

export default Event
