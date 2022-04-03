import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Liono l'agence numérique responsable à Liège"
      description="Liono l'agence numérique qui vous accompagne dans le développement de vos solutions numériques écoresponsables à Liège"
    />
    {/*section 1*/}
    <article class=" w-12/12 py-5 md:py-20 bg-liono-green text-white">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left order-2">
          <h1 class="my-4 text-5xl font-bold m-auto md:m-0 text-center md:text-left leading-tight mb-10">
            Liono
          </h1>
          <p class="leading-normal text-2xl mb-8">
            L'agence numérique liégeoise
            <br />
            qui vous accompagne dans votre développement numérique responsable
          </p>
          <a href="/#contact">
            <button class="mx-auto lg:mx-0  bg-white  font-bold text-liono-blue rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Parlons de votre projet{" "}
            </button>
          </a>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center order-1">
          <img
            class="w-full md:w-4/5 z-50"
            alt="image d'accroche Liono"
            loading="lazy"
            src="https://res.cloudinary.com/liono/image/upload/v1638521388/site%20Liono/accueil1_pqkybc.svg"
          />
        </div>
      </div>
    </article>

    {/* vague*/}

    <article class="hidden md:block md:relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            ></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
          </g>
        </g>
      </svg>
    </article>
    {/* section 2*/}
    <div class=" mt-10 md:mt-0  w-10/12 m-auto text-center italic md:text-lg mb-20">
      <p>
        Vous souhaitez réaliser{" "}
        <span class="text-liono-blue font-black">votre site internet </span> ou
        redéfinir{" "}
        <span class="text-liono-blue font-black"> vos outils numériques </span>{" "}
        existant dans{" "}
        <span class="text-liono-blue font-black">
          {" "}
          une démarche écoresponsable{" "}
        </span>{" "}
        ? Nous sommes là pour vous !
      </p>
      <p class="mt-5">
        Liono est{" "}
        <span class="text-liono-blue font-black"> une agence numérique </span>{" "}
        située à Liège qui est orientée vers{" "}
        <span class="text-liono-blue font-black">
          {" "}
          des solutions éco-pensées{" "}
        </span>
        . Avec un souci de sobriété numérique important, nous réalisons
        <span class="text-liono-blue font-black">
          {" "}
          vos sites internet, e-shops, campagne d’e-mailing…
        </span>
        Nous vous proposons{" "}
        <span class="text-liono-blue font-black"> des formations</span> sur des
        thématiques numériques et entrepreneuriales responsables et nous vous{" "}
        <span class="text-liono-blue font-black"> accompagnons</span> vers{" "}
        <span class="text-liono-blue font-black">
          {" "}
          une transformation numérique plus verte
        </span>
        .
      </p>
    </div>

    <h2
      id="service"
      class="m-auto text-center text-4xl text-liono-green mb-20 w-max pb-2 border-b-2 border-liono-yellow"
    >
      {" "}
      Nos services
    </h2>
    <article class="md:grid flex flex-col grid-cols-2 w-10/12 m-auto mb-20 gap-x-20">
      <figure class="mb-5 md:mb-0 h-full">
        <StaticImage
          loading="lazy"
          src="https://res.cloudinary.com/liono/image/upload/v1638528286/site%20Liono/green-web_g2kswb.webp"
          alt="Photo d'illustration de la section site eco-pensé"
        />
      </figure>
      <section>
        <h3 class="  text-3xl text-liono-green mb-10  ">
          {" "}
          Sites Internet et e-shop éco-pensés
        </h3>
        <div class="flex flex-col space-y-5 m-auto">
          <p>
            Vous souhaitez avoir un site vitrine illustrant votre activité ou
            bien mettre en place un e-shop pour vendre toutes vos productions ?
          </p>
          <p>
            Nous avons des solutions pour vous qui vont à la fois vous permettre
            d'atteindre vos objectifs et proposer un site le plus écologique
            possible.
          </p>

          <p>
            grâce à des sites internet, pensés de façon "statique" n'utilisant
            que l'essentiel à leur bon fonctionnement, des formats d'image
            modernes et très légers ou encore des outils d'analyse respectueux
            de la vie privée et peu énergivores.{" "}
          </p>
          <a href="/#contact">
            <button
              class="mx-auto lg:mx-0 w-max  bg-liono-green  font-bold text-white rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Nous contacter
            </button>
          </a>
        </div>
      </section>
    </article>

    <article class="md:grid flex flex-col grid-cols-2 w-10/12 m-auto mb-20 gap-x-20">
      <section class="order-2 md:order-1">
        <h3 class="  text-3xl text-liono-blue mb-10  "> Formations </h3>
        <div class="flex flex-col space-y-5 m-auto">
          <p>
            {" "}
            La création de sites sobres numériquement, n'est pas la seule
            démarche numérique à mettre en place quand on veut limiter son
            empreinte carbone.
          </p>
          <p>
            Liono vous propose des formations vous apprenant les bonnes
            pratiques, pour limiter le plus possible l'impact numérique de votre
            activité.
          </p>

          <p>
            {" "}
            Liono vous propose des formations de groupe en présentiel ou en
            ligne, à des dates choisies par nos soins à prix référentiels ou des
            formations privées et personalisées en entreprise{" "}
          </p>
          <a href="/#contact">
            <button
              class="mx-auto lg:mx-0 w-max  bg-liono-blue  font-bold text-white rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Nous contacter
            </button>
          </a>
        </div>
      </section>
      <figure class=" order-1 md:order-2 mb-5 md:mb-0">
        {" "}
        <StaticImage
          loading="lazy"
          src="https://res.cloudinary.com/liono/image/upload/v1638528286/site%20Liono/accompagnement_g2v9ue.webp"
          alt="Photo d'illustration de la section formation "
        />
      </figure>
    </article>

    <article class="md:grid flex flex-col grid-cols-2 w-10/12 m-auto mb-20 gap-x-20">
      <figure class="mb-5 md:mb-0">
        {" "}
        <StaticImage
          loading="lazy"
          src="https://res.cloudinary.com/liono/image/upload/v1638528286/site%20Liono/autres-solutions_img7ao.webp"
          alt="Photo d'illustration de la section site accompagnement"
        />
      </figure>
      <section>
        <h3 class="  text-3xl text-liono-yellow mb-10  ">
          {" "}
          Accompagnement digital
        </h3>
        <div class="flex flex-col space-y-5 m-auto">
          <p>
            {" "}
            Vous avez déjà des solutions numériques mises en place au sein de
            votre activité, mais vous souhaitez néanmoins les réévaluer et avoir
            une démarche plus écologique ?
          </p>
          <p>
            Nous vous proposons un audit de vos différents outils au niveau de
            l’efficacité et de l'impact écologique suivi d'un accompagnement qui
            adaptera les résultats de l'audit à votre réalité de terrain.
          </p>
          <a href="/#contact">
            <button
              class="mx-auto lg:mx-0 w-max  bg-liono-yellow  font-bold text-white rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Nous contacter
            </button>
          </a>
        </div>
      </section>
    </article>
    <section class="max-w-8xl mx-auto container bg-white pt-16">
      <div>
        <div role="contentinfo" class="flex items-center flex-col px-4">
          <h2
            class="m-auto text-center text-4xl text-liono-green mb-20 w-max pb-2 border-b-2 border-liono-yellow"
            id="engagement"
          >
            {" "}
            Nos Engagements
          </h2>
        </div>
        <div
          tabindex="0"
          aria-label="group of cards"
          class="focus:outline-none mt-10 flex flex-wrap justify-center gap-10 px-4"
        >
          <div
            tabindex="0"
            aria-label="card 1"
            class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
          >
            <div class="w-20 h-20 relative mr-5">
              <div class="absolute top-0 right-0 bg-gray-100  w-16 h-16 mt-2 mr-1"></div>
              <div class="absolute text-white bottom-0 left-0 bg-liono-blue  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <StaticImage
                  loading="lazy"
                  src="https://res.cloudinary.com/liono/image/upload/v1638534575/site%20Liono/icons8-feuille-50_jkknbo.png"
                  alt="drawer "
                />
              </div>
            </div>
            <div class="w-10/12">
              <h2
                tabindex="0"
                class="focus:outline-none text-lg font-bold leading-tight text-gray-800"
              >
                Solution éco-pensée
              </h2>
              <p
                tabindex="0"
                class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
              >
                Le développement de nos sites internet et de nos outils est
                pensé dans une démarche la plus écologique possible.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            aria-label="card 2"
            class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
          >
            <div class="w-20 h-20 relative mr-5">
              <div class="absolute top-0 right-0 bg-gray-100  w-16 h-16 mt-2 mr-1"></div>
              <div class="absolute text-white bottom-0 left-0 bg-liono-yellow  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <StaticImage
                  loading="lazy"
                  src="https://res.cloudinary.com/liono/image/upload/v1638535461/site%20Liono/icons8-conf%C3%A9rence-t%C3%A9l%C3%A9phonique-50_t9elt6.png"
                  alt="check"
                />
              </div>
            </div>
            <div class="w-10/12">
              <h2
                tabindex="0"
                class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
              >
                {" "}
                Accompagnement{" "}
              </h2>
              <p
                tabindex="0"
                class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
              >
                Nous vous suivons et vous conseillons dans le développement
                numérique vert de votre activité.{" "}
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            aria-label="card 3"
            class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
          >
            <div class="w-20 h-20 relative mr-5">
              <div class="absolute top-0 right-0 bg-gray-100  w-16 h-16 mt-2 mr-1"></div>
              <div class="absolute text-white bottom-0 left-0 bg-liono-green  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <StaticImage
                  loading="lazy"
                  src="https://res.cloudinary.com/liono/image/upload/v1638535594/site%20Liono/icons8-points-d_int%C3%A9r%C3%AAts-50_m1bkuc.png"
                  alt="html tag"
                />
              </div>
            </div>
            <div class="w-10/12">
              <h2
                tabindex="0"
                class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
              >
                Local
              </h2>
              <p
                tabindex="0"
                class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
              >
                Nous avons à cœur d'accompagner les entrepreneurs de Liège et de
                toute la Wallonie dans leur développement digital et de
                collaborer avec des acteurs locaux.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            aria-label="card 4"
            class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
          >
            <div class="w-20 h-20 relative mr-5">
              <div class="absolute top-0 right-0 bg-gray-100  w-16 h-16 mt-2 mr-1"></div>
              <div class="absolute text-white bottom-0 left-0 bg-liono-blue  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <StaticImage
                  loading="lazy"
                  src="https://res.cloudinary.com/liono/image/upload/c_scale,w_50/v1638535672/site%20Liono/icons8-euro-64_x8ezwj.png"
                  alt="monitor"
                />
              </div>
            </div>
            <div class="w-10/12">
              <h2
                tabindex="0"
                class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
              >
                {" "}
                Prix raisonnés{" "}
              </h2>
              <p
                tabindex="0"
                class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
              >
                {" "}
                Nous analysons votre demande pour vous offrir la solution la
                plus adaptée à votre besoin et cohérent à votre budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h2
      id="contact"
      class="m-auto w-10/12 text-center text-4xl text-liono-green mb-5 pt-20 md:w-max pb-2 border-b-2 border-liono-yellow"
    >
      {" "}
      Envie d'en savoir plus ?{" "}
    </h2>
    <p class=" w-10/12  md:w-6/12 text-center m-auto">
      Vous souhaitez en connaitre davantage concernant le web éco-pensé ou vous
      souhaitez développer votre site ? N'hésitez pas à nous contacter !{" "}
    </p>
    <div class="w-10/12 mt-10 mb-20 m-auto text-center">
      <a
        href="mailto:info@liono.be
?subject=Demande de contact"
      >
        <button
          class="mx-auto m-auto lg:mx-0 w-max  bg-liono-blue text-lg  font-bold text-white rounded-full   py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          type="button"
        >
          info@liono.be
        </button>
      </a>
    </div>
  </Layout>
)

export default IndexPage
