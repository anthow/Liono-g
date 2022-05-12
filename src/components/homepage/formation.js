import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Formation = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <article class=" w-12/12  md:grid gap-x-20 grid-cols-4  ">
      <section className="bg-secondary-color col-span-1 hidden md:block"></section>
      <section className="col-span-3 py-20 flex flex-col gap-y-10">
        <h2 className="text-3xl bg-third-color text-white w-max px-2">
          Notre prochaine formation
        </h2>
        <div className="flex flex-col gap-x-10 md:grid grid-cols-2">
          <div className="fex flex-col space-y-5 order-2 md:order-1">
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl">
                faites évoluer votre projet entrepreneurial avec des outils
                numériques éco pensés
              </h3>
              <p className="text-sm italic">
                La date et le lieu sont encore à définir
              </p>
            </div>
            <p>
              Vous souhaitez en savoir plus sur l'impact écologique du numérique
              ? Vous souhaitez trouver les applications et les bonnes pratiques
              qui permettront de développer votre activité tout en limitant
              votre impact écologique ?<br />
              <br /> Au cours de ce premier atelier de 3 heures; vous
              découvrirez l'impact écologique du numérique et ses sources de
              pollution ainsi que les outils et les bonnes pratiques à mettre en
              place numériquement au sein de votre projet pour le rendre plus
              écoresponsable.
            </p>
            <div className="flex hidden md:space-x-4">
              <button
                class="mx-auto  lg:mx-0  
      bg-black hover:bg-gray-600  font-bold text-white 
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max"
              >
                S'inscrire{" "}
              </button>
              <button
                class="mx-auto  lg:mx-0  
      bg-black hover:bg-gray-600  font-bold text-white 
      text-lg
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out"
              >
                En savoir plus{" "}
              </button>
            </div>
          </div>{" "}
          <StaticImage
            loading="lazy"
            src="https://res.cloudinary.com/liono/image/upload/v1651213353/site%20Liono/pexels-startup-stock-photos-7096_yzarvr.jpg"
            alt="Photo d'illustration de la section site eco-pensé"
            class="h-full order-1 md:order-2"
          />
        </div>
      </section>
    </article>
  )
}

export default Formation
