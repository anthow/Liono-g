import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactAccompagnement from "../components/accompagnement/contact"


const SitePage = () => (
  <Layout>
    <Seo
      title="Accompagnement digital  vert"
      description="Liono l'agence numérique responsable qui vous accompagnes dans votre développement digital à Liège"
    />
    <article className="flex flex-col md:grid grid-cols-7  bg-secondary-color ">
      <section className=" bg-primary-color"></section>
      <section className="col-span-6 accompagnement  py-60  ">
        {/*}<StaticImage src="https://res.cloudinary.com/liono/image/upload/v1651614043/site%20Liono/pexels-format-1029757_q6b8pg.jpg"/>{*/}
        <div className=" flex flex-col m-auto content-center self-center items-center">
          <h2 className="text-4xl bg-third-color text-white p-4 md:w-10/12">
            Liono c'est aussi un accompagnement digital sur mesure et
            responsable !
          </h2>
        </div>
      </section>
    </article>
    {/*} partie deux 
    <article className=" w-12/12 py-20   bg-primary-color flex  ">
      <div className="  p-2 text-center font-bold flex flex-col  bg-third-color text-white  w-10/12 m-auto">
        <p>
          Vous ne savez pas comment mettre en place les outils numériques
          nécessaires au développement de votre activité ?
        </p>
        <p>
          Vous cherchez à être le plus écologique dans votre utilisation du
          numérique au sein de votre projet ?
        </p>
        <p className="mt-5 text-lg text-center">
          Nous avons une méthode qui vous permettra de réduire un maximum votre
          impact numérique environnementale !
        </p>
      </div>
    </article>{*/}
    {/*} partie trois {*/}
    <article className=" w-12/12 py-10 hidden md:block  bg-primary-color flex  ">
</article>

    <article className="flex flex-col md:grid grid-cols-6">
      <section className="col-span-5 flex flex-col  py-10 ">
        <h3 className="bg-third-color  text-white w-max text-4xl px-2">
          Notre méthode
        </h3>
        <div className="flex flex-col items-center mt-5">
          <div className="container  mx-auto w-full h-full">
            <div className="relative  text-third-color wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 absolute  timeline border-opacity-20 border-gray-700 h-full border"
                styles="left: 50%"
              ></div>
              {/* right timeline */}
              <div className="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div className="order-1  w-12/12 md:w-5/12"></div>
                <div className="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h3 className="mx-auto font-semibold text-lg text-white">1</h3>
                </div>
                <div className="order-1 text-third-color z-20 rounded-lg shadow-xl bg-third-color md:w-5/12 px-6 py-4">
                  <h4 className="text-white text-lg mb-2 "> Audit numérique</h4>
                  <p className="text-sm leading-snug tracking-wide  text-white  text-opacity-100">
                    suite à une première rencontre où nous découvrons votre
                    projet et vos objectifs, Nous analysons les outils et les
                    stratégies que vous avez déjà mis en place. Nous vérifions
                    leur efficacité et leur impact écologique, le tout résumé
                    dans un rapport d’audit.
                  </p>
                </div>
              </div>

              {/* left timeline */}
              <div className="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h3 className="mx-auto text-white font-semibold text-lg">2</h3>
                </div>
                <div className="order-1 color bg-third-color shadow-xl rounded-lg z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                  <h4 className="text-white text-lg mb-2 ">
                    {" "}
                    Définition de la stratégie
                  </h4>
                  <p className="text-sm font-medium   text-opacity-100">
                    Après cet audit,
                    <br />
                    nous vous proposons un plan d’action qui permettra de mettre
                    en œuvre votre nouvelle stratégie digitale verte et viser au
                    mieux vos objectifs Elle peut à la fois porter sur
                    l’utilisation des différents réseaux sociaux, la création ou
                    la mise un jour d’un site internet, mais aussi sur des
                    outils qui permettront de faciliter le quotidien de votre
                    activité, comme des outils de communication, d’analyse et
                    d’automatisation.
                    <br />
                    Nous définissons également par qui vont être réalisées les
                    différentes étapes. Pour des étapes qui demandent de
                    l’autonomie de votre part, nous vous fournissons des outils
                    vous permettant de faciliter cette autonomie. Pour toutes
                    missions non réalisables par notre agence, nous vous
                    trouvons le prestataire idéal.
                    <br />
                    Nous choisissons aussi les différents indicateurs à évaluer
                    dans le futur <br />
                  </p>
                </div>
              </div>

              {/* right timeline */}
              <div className="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div className="order-1  w-12/12 md:w-5/12"></div>
                <div className="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h3 className="mx-auto font-semibold text-lg text-white">3</h3>
                </div>
                <div className="order-1 text-third-color z-20 rounded-lg shadow-xl bg-third-color md:w-5/12 px-6 py-4">
                  <h4 className="text-white text-lg mb-2 ">
                    {" "}
                    Création
                                      </h4>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  Pour cette étape, nous passons à l’action. De notre côté nous développons les outils décidés à l’étape précédente, la mise en place de gabarit vous permettant un maximum d’autonomie et le suivi des prestations réalisées par des intervenants extérieurs. De votre côté, vous commencez à mettre en place les stratégies proposées avec notre soutien.

                  </p>
                </div>
              </div>

              {/*left timeline */}
              <div className="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h3 className="mx-auto text-white font-semibold text-lg">4</h3>
                </div>
                <div className="order-1 color bg-third-color shadow-xl rounded-lg z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                  <h4 className="text-white text-lg mb-2 ">
                    {" "}
                    Suivi                   </h4>
                  <p className="text-sm font-medium leading-snug text-white tracking-wide text-opacity-100">
                  Il est très important d’évaluer de manière régulière le travail effectué et ajuster les stratégies en fonction des résultats, grâce aux indicateurs définis précédemment, nous prenons le temps de les évaluer périodiquement et appliquer les changements nécessaires
.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-color "></section>
    </article>
    {/*} partie quatre {*/}

    <article className="bg-primary-color flex flex-col gap-y-10 ">
      <ContactAccompagnement />
     </article>
  </Layout>
)

export default SitePage
