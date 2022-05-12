import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptop,
  faPersonCircleQuestion,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons"

const SitePage = () => (
  <Layout>
    <Seo
      title="réalisation de site internet vert"
      description="Liono l'agence numérique qui réalise votre site internet  écoresponsables à Liège"
    />
    <article className="flex flex-col md:grid grid-cols-7  bg-secondary-color ">
      <section className="col-span-1 bg-primary-color"></section>
      <section className="col-span-6 siteinternet  py-60  ">
        {/*}<StaticImage src="https://res.cloudinary.com/liono/image/upload/v1651614043/site%20Liono/pexels-format-1029757_q6b8pg.jpg"/>{*/}
        <div className=" flex flex-col m-auto content-center self-center items-center">
          <h1 className="text-4xl bg-third-color text-white p-4">
            Un site internet percutant et léger?
            <br /> C'est possible !
          </h1>
        </div>
      </section>
    </article>
    {/*} partie deux {*/}
    <article class=" w-12/12 py-20   bg-primary-color flex  ">
      <div className=" flex flex-col md:grid grid-cols-3 gap-x-20 w-10/12 m-auto">
        <section className="flex flex-col text-center items-center gap-y-5">
          <FontAwesomeIcon icon={faLaptop} size="4x" className="" />
          <h2 className="text-3xl bg-third-color text-white px-2">
            {" "}
            Site interet{" "}
          </h2>
          <p>
            Créons le site internet qui permettra de mettre en valeur vôtre
            activité{" "}
          </p>
          {/*} <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteSiteInternet }} />{*/}
        </section>

        <section className="flex flex-col text-center items-center gap-y-5">
          <FontAwesomeIcon
            icon={faPersonCircleQuestion}
            size="4x"
            className=""
          />

          <h2 className="text-3xl bg-third-color text-white px-2"> Eshop </h2>
          {/*}<div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteFormationNumRique }} />{*/}
          <p>
            Créons la boutique en ligne nécessaire au développement de votre
            projet
          </p>
        </section>

        <section className="flex flex-col text-center items-center gap-y-5">
          <FontAwesomeIcon icon={faPeopleGroup} size="4x" className="" />
          <h2 className="text-3xl bg-third-color text-white px-2">
            {" "}
            Solution maison{" "}
          </h2>
          {/*}<div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteAccompagnementNumRique }} />{*/}
          <p>
            Nous réalisons également les solutions maison qui permettront de
            mieux gérer votre activité au quotidien
          </p>
        </section>
      </div>
    </article>
    {/*} partie trois {*/}

    <article className="flex flex-col md:grid grid-cols-6">
      <section className="col-span-5 flex flex-col  py-10 ">
        <h1 className="bg-third-color  text-white w-max text-4xl px-2">
          Notre méthode
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div class="container  mx-auto w-full h-full">
            <div class="relative  text-third-color wrap overflow-hidden p-10 h-full">
              <div
                class="border-2-2 absolute  timeline border-opacity-20 border-gray-700 h-full border"
                styles="left: 50%"
              ></div>
              {/* right timeline */}
              <div class="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div class="order-1  w-12/12 md:w-5/12"></div>
                <div class="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1 text-third-color z-20 rounded-lg shadow-xl bg-third-color md:w-5/12 px-6 py-4">
                  <h3 className="text-white text-lg mb-2 ">
                    {" "}
                    Première rencontre
                  </h3>
                  <p class="text-sm leading-snug tracking-wide  text-white  text-opacity-100">
                    Nous nous rencontrons pour parler de votre projet et vos
                    attentes. Cette rencontre est nécessaire, pour pouvoir de
                    notre côté comprendre les besoins et les ambitions derrière
                    le développement de votre site internet, eshop ou tout autre
                    projet numérique
                  </p>
                </div>
              </div>

              {/* left timeline */}
              <div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div class="order-1 color bg-third-color shadow-xl rounded-lg z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                  <h3 className="text-white text-lg mb-2 ">
                    {" "}
                    Définition du projet
                  </h3>
                  <p class="text-sm font-medium   text-opacity-100">
                    Nous travaillons ensuite pour définir votre correctement
                    votre interprétant avec divers outils ( Arborescence,
                    Wireframe, structure de l'information... ) les besoins et
                    outils exprimés lors de notre rencontre.
                  </p>
                </div>
              </div>

              {/* right timeline */}
              <div class="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div class="order-1  w-12/12 md:w-5/12"></div>
                <div class="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div class="order-1 text-third-color z-20 rounded-lg shadow-xl bg-third-color md:w-5/12 px-6 py-4">
                  <h3 className="text-white text-lg mb-2 ">
                    {" "}
                    Redéfinition éco-pensée du projet
                  </h3>
                  <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    Pour cette étape, nous vous accompagnons pour analyser et
                    définir les interactivités réellement nécessaires pour le
                    bon fonctionnement du site et de votre stratégie, c'est à
                    cette étape où l'on enlève tous les éléments non probants à
                    votre projet et qui pourrait être une facteur de pollution
                    plus important.
                    <br />
                    Après cette étape, nous pourrons clôturer le cahier des
                    charges du projet.
                  </p>
                </div>
              </div>

              {/*left timeline */}
              <div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div class="order-1 color bg-third-color shadow-xl rounded-lg z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                  <h3 className="text-white text-lg mb-2 ">
                    {" "}
                    Webdesign et structure du projet{" "}
                  </h3>
                  <p class="text-sm font-medium leading-snug text-white tracking-wide text-opacity-100">
                    Nous allons ensuite vous proposer un design pour votre
                    site/eshop/projet numérique, tout en codant en parallèle la
                    structure du site.
                  </p>
                </div>
              </div>
              {/* right timeline */}
              <div class="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div class="order-1  w-12/12 md:w-5/12"></div>
                <div class="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
                </div>
                <div class="order-1 text-third-color z-20 rounded-lg shadow-xl bg-third-color md:w-5/12 px-6 py-4">
                  <h3 className="text-white text-lg mb-2 ">
                    {" "}
                    Développement du site.
                  </h3>
                  <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    C'est à ce stade que nous développons l'ensemble du site.
                  </p>
                </div>
              </div>

              {/*left timeline */}
              <div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">6</h1>
                </div>
                <div class="order-1 color bg-third-color shadow-xl rounded-lg z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                  <h3 className="text-white text-lg mb-2 "> Mise en ligne </h3>
                  <p class="text-sm font-medium leading-snug text-white tracking-wide text-opacity-100">
                    Une fois le site validé par vos soins, nous le mettons en
                    ligne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-color col-span-1"></section>
    </article>
    {/*} partie quatre {*/}

    <article className="bg-primary-color flex flex-col gap-y-20 py-20">
      <h2 className=" bg-third-color mt-10 text-white w-max text-4xl px-2">
        {" "}
        nos outils{" "}
      </h2>
      <section className="flex w-10/12 m-auto items-center m-auto content-center flex-col gap-40 md:grid grid-cols-3">
        <div className="grid grid-cols-2 gap-20 md:mt-20 items-center grid-rows-2 self-center col-span-1 ">
          <figure>
            <a href="https://strapi.io/" rel="noreferrer" target="_blank">
              {" "}
              <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1651677577/site%20Liono/Strapi.logo.assets/PNG/PNG.logo.purple.dark_mjk7s9.png" />
            </a>
          </figure>
          <figure>
            <a href="https://www.datocms.com/" rel="noreferrer" target="_blank">
              <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1651677895/site%20Liono/Brand%20assets/Png/Icon%20and%20text/Color/color_full_logo_afc1rt.png" />
            </a>
          </figure>
          <figure>
            <a href="https://www.contentful.com/" rel="noreferrer" target="_blank">
              <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652256453/site%20Liono/logo-contentful_u1hxnt.png" />
            </a>
          </figure>
          <figure>
            <a href="https://forestry.io/" rel="noreferrer" target="_blank">
              <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652256754/site%20Liono/forestry-removebg-preview_tfytyc.png" />
            </a>
          </figure>
        </div>
        <div className="col-span-2 flex gap-y-10 flex-col ">
          <h3 className="text-3xl bg-third-color w-max text-left text-white px-2">
            CMS headless
          </h3>
          <div className="bg-white w-full p-10">
            <p>
              Un CMS est un outil qui va vous permettre d'encoder facilement
              tout le contenu de votre site: texte, images, vidéos... Tout le
              contenu sera stocké à cet endroit.
            </p>
            <p>
              Un CMS est dit "Headless" quand son seul but est de stocker le
              contenu sans le publier sur le web. Cette méthode permet d'avoir
              des CMS plus légers et plus personnalisables qu'un CMS classique
              comme Wordpress.
            </p>
          </div>
        </div>
      </section>
    </article>
    <article className="bg-primary-color flex flex-col gap-y-20 py-20">
      <section className="flex w-10/12 m-auto items-center flex-col gap-40 md:grid grid-cols-3">
        <div className="grid grid-cols-2 gap-20 md:mt-20 items-center grid-rows-2 order-1 md:order-2 col-span-1 ">
          <figure>
            <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">
            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652257370/site%20Liono/Gatsby_Logo_cgj5lx.png" />
            </a>
          </figure>
          <figure>
          <a href="https://astro.build/" rel="noreferrer" target="_blank">

            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652257504/site%20Liono/astro_wt2ndv.png" />
            </a>
          </figure>
          <figure>
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">

            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652257655/site%20Liono/800px-Nextjs-logo.svg_cpqulz.png" />
            </a>
          </figure>
          <figure>
          <a href="https://svelte.dev/" rel="noreferrer" target="_blank">

            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652257720/site%20Liono/svelte-logo_fvn3bb.png" />
            </a>
          </figure>
        </div>
        <div className="col-span-2 flex gap-y-10 flex-col order-2 md:order-1 ">
          <h3 className="text-3xl bg-third-color w-max text-left text-white px-2">
            Générateur de site statique
          </h3>
          <div className="bg-white w-full p-10">
            <p>
              Le générateur de site statique est l'outil qui nous permet de
              réaliser votre site internet, c'est notre principal outil de
              développement
            </p>
            <p>
              Les générateurs de site statique optimisent votre site internet
              pour qu'il soit le plus performant et le plus léger possible. Ils
              ne passent par le serveur de base de données à chaque visite sur
              votre site, mais créer une nouvelle version du site à chaque
              modification de votre qui part dans le CMS headless. ce qui
              limitera l'utilisation de bande passante et de téléchargement de
              données pour vos visiteurs.
            </p>
          </div>
        </div>
      </section>
    </article>
    <article className="bg-primary-color flex flex-col gap-y-20 py-20">
      <section className="flex w-10/12 m-auto items-center m-auto content-center flex-col gap-40 md:grid grid-cols-3">
        <div className="grid grid-cols-2 gap-20 md:mt-20 items-center grid-rows-2 self-center col-span-1 ">
          <figure>
            <a href="https://cloudinary.com/" rel="noreferrer" target="_blank">
            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652258607/site%20Liono/cloudinary_rwpaum.png" />
            </a>
          </figure>
          <figure>
          <a href="https://formspree.io/" rel="noreferrer" target="_blank">

            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652261543/site%20Liono/5ef956a55caef50ed61ec7e2_formspree-logo-full-horizontal_2x_kecmjh.png" />
         </a>
          </figure>
          <figure>
          <a href="https://formspree.io/" rel="noreferrer" target="_blank">

            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652261625/site%20Liono/logo-algolia-nebula-blue-full_a6cns6.png" />
         </a>
          </figure>
          <figure>
          <a href="https://matomo.org/" rel="noreferrer" target="_blank">

            <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1652261734/site%20Liono/1280px-Matomo_Logo.svg_o2hkwv.png" />
          </a>
          </figure>
        </div>
        <div className="col-span-2 flex gap-y-10 flex-col ">
          <h3 className="text-3xl bg-third-color w-max text-left text-white px-2">
            Les API{" "}
          </h3>
          <div className="bg-white w-full p-10">
            <p>
              Les Api sont des micros-services qui permettent l'implémentation
              au sein de votre site internet des fonctionnalités précises.
            </p>
            <p>
              Les Api peuvent aussi bien proposer un système de gestion et
              d'optimisation des photos du site que la gestion du formulaire de
              contact, de la barre de recherche ou d'outils analytiques.
            </p>
          </div>
        </div>
      </section>
    </article>
    <article className="flex flex-col md:grid grid-cols-7  bg-secondary-color ">
      <section className="col-span-1 bg-primary-color"></section>
      <section className="col-span-6 data  py-60  ">
        {/*}<StaticImage src="https://res.cloudinary.com/liono/image/upload/v1651614043/site%20Liono/pexels-format-1029757_q6b8pg.jpg"/>{*/}
        <div className=" flex flex-col m-auto content-center p-4 w-9/12 md:w-1/2 bg-third-color text-white w-max self-center items-center">
          <h2 className="text-2xl bg-third-color mb-10 text-white ">
            Hébergement vert
          </h2>
          <p>
            {" "}
            Un web plus vert passe aussi par une gestion des datas centers plus
            raisonnée et la mise en avant d'acteurs éco-reponsables{" "}
          </p>
          <p>
            En fonction de votre projet, Liono vous propose un hebergement vert
            soit chez           <a href="https://www.infomaniak.com/fr" rel="noreferrer" target="_blank">
 Infomaniak </a>, soit chez <a href="https://www.monsitevert.fr/" rel="noreferrer" target="_blank"> Mon Site Vert </a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
)

export default SitePage
