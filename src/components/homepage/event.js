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
                Webinaire: Les clés pour définir votre site web avant de vous lancer dans
                des dépenses inconsidérées
              </h3>
              <p className="text-sm italic">
                Le mardi 22 septembre 2023 de 12h15 à 13h{" "}
              </p>
            </div>
            <p>
              Découvrez les secrets pour définir votre site web de manière
              efficace, sans vous ruiner. Apprenez à planifier vos objectifs, à
              cibler votre public et à optimiser votre investissement.
              Économisez temps et argent en prenant des décisions éclairées.
              Rejoignez notre webinaire dès maintenant et maîtrisez l'art de
              créer un site web performant, sans dépenses inconsidérées.
            </p>
            <div className="flex  md:space-x-4">
              <button
                className="mx-auto  lg:mx-0  
      bg-black hover:bg-gray-600  font-bold text-white 
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max"
              >
                <a
                  href="https://tally.so/r/mBK5Z7"
                  target=" _blank"
                  rel="noopener"
                >
                  Inscription{" "}
                </a>
              </button>
              <button
                className="mx-auto hidden  lg:mx-0  
      bg-black hover:bg-gray-600  font-bold text-white 
      text-lg
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out"
              >
                <a
                  href="https://www.facebook.com/ZoheWomenEconomy/posts/pfbid02ZaFdTUdYwuAxxtgEfXM1g5nBw6L4xj35RUP2Vfg3Bykt3mZYMPGmsfuntf8tybMl"
                  target=" _blank"
                  rel="noopener"
                >
                  En savoir plus{" "}
                </a>
              </button>
            </div>
          </div>{" "}
          <StaticImage
            loading="lazy"
            src="https://res.cloudinary.com/liono/image/upload/v1672660578/site%20Liono/accompagnement_zikfld.jpg"
            alt="image illustrant le webinaire sur Les clés pour définir votre site web avant de vous lancer dans
            des dépenses inconsidérées "
            className="h-full order-1 md:order-2"
          />
          </div>
      </section>
    </article>
  )
}

export default Event
