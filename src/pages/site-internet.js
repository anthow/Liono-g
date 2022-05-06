import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptop,
  faPersonCircleQuestion,
  faScreenUsers,
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
            <br /> c'est possible !
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
            site interet{" "}
          </h2>
          <p>
            Créons le site internet qui permettra mettre en valeur votre
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
            Mettons en place la boutique en ligne nécessaire au développement de
            votre projet
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
            Nous réalisons également les solutions maisons qui permettront de
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
                    Rédéfinition éco-pensée du projet
                  </h3>
                  <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    Pour cette étape, nous vous accompagnons pour analyser et
                    définir les interactivités réellement nécessaires pour le
                    bon fonctionnement du site et de votre stratégie, c'est à
                    cette étape que l'on enlève tous les éléments non probants à
                    votre projet et qui pourrait être une facteur de pollution
                    plus important.
                    <br />
                    Après cette étape, nous pourrons cloturer le cahier des
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
                    c'est à ce stade que nous développons l'ensemble du site.
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
      <h2 className=" text-3xl bg-third-color w-max text-white px-2">
        {" "}
        nos outils{" "}
      </h2>
      <section className="flex w-10/12 m-auto items-center flex-col gap-40 md:grid grid-cols-3">
        <div className="grid grid-cols-2 gap-20 grid-rows-2 col-span-1 ">
          <figure>
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1651677577/site%20Liono/Strapi.logo.assets/PNG/PNG.logo.purple.dark_mjk7s9.png"
            />
          </figure>
          <figure>
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1651677895/site%20Liono/Brand%20assets/Png/Icon%20and%20text/Color/color_full_logo_afc1rt.png"
            />
          </figure>
          <figure>
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1651677577/site%20Liono/Strapi.logo.assets/PNG/PNG.logo.purple.dark_mjk7s9.png"
            />
          </figure>
          <figure>
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1651677577/site%20Liono/Strapi.logo.assets/PNG/PNG.logo.purple.dark_mjk7s9.png"
            />
          </figure>
        </div>
        <div className="col-span-2 flex gap-y-10 flex-col ">
          <h3 className="text-3xl bg-third-color w-max text-left text-white px-2">
            CMS headless
          </h3>
          <div className="bg-white w-full p-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            lectus nulla at volutpat diam ut venenatis tellus in. Donec pretium
            vulputate sapien nec sagittis. Turpis massa tincidunt dui ut ornare
            lectus sit amet. Gravida in fermentum et sollicitudin ac orci
            phasellus. Porttitor lacus luctus accumsan tortor posuere ac. Eget
            est lorem ipsum dolor. Vestibulum lorem sed risus ultricies
            tristique nulla. Dolor magna eget est lorem ipsum dolor. Tempus
            egestas sed sed risus. Dictum at tempor commodo ullamcorper a. Eget
            lorem dolor sed viverra ipsum nunc. Volutpat commodo sed egestas
            egestas fringilla phasellus faucibus. Nisl vel pretium lectus quam
            id leo in vitae. Ut ornare lectus sit amet est. Cum sociis natoque
            penatibus et. Cum sociis natoque penatibus et magnis dis parturient
            montes nascetur. Nec dui nunc mattis enim ut.
          </div>
        </div>
      </section>
    </article>

    <article>hébergement vert </article>
  </Layout>
)

export default SitePage
