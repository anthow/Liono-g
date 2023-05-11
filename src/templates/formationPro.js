import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const formation = ({ data }) => (
  <>
 <Seo
      title= {data.datoCmsFormationPro.seo.title}
      description={data.datoCmsFormationPro.seo.description}
    />    <Layout>
      <article className=" w-12/12 p-4 md:p-0  pb-20 bg-secondary-color ">
        <section className="  md:w-12/12 py-4 gap-y-5 md:py-0 m-auto bg-primary-color md:items-center md:pl-10  flex flex-col  lg:grid grid-cols-3 ">
          {/*}
  <div className=" w-5/12 h-min bg-fourth-color self-end pt-32 hidden md:block">
      <GatsbyImage image={data.datoCmsFormationPro.imageHeaderUn.gatsbyImageData}
       alt={data.datoCmsFormationPro.imageHeaderUn.alt}
       loading="lazy"
       className="w-full"
       />

    </div>
  {*/}
          <div
            className="flex m-2 md:py-0 bg-white  flex-col col-span-1 h-min     p-4  
    justify-center md:items-start  order-2 md:order-1"
          >
            <h2 className=" w-12/12 m-auto text-center text-third-color pt-2 font-bold title text-3xl mb-8">
              {data.datoCmsFormationPro.titreFormation}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationPro.introduction,
              }}
            />
          </div>
          <div className="   md:p-20  bg-primary-color col-span-2  md:mr-10 order-1 md:order-2">
            <GatsbyImage
              image={data.datoCmsFormationPro.imageFormation.gatsbyImageData}
              className="w-full"
              alt={data.datoCmsFormationPro.imageFormation.gatsbyImageData}
              loading="lazy"
            />
          </div>
        </section>
      </article>
      <article className=" w-12/12 py-20   bg-secondary-color flex  ">
        <div className=" flex flex-col md:grid grid-cols-3 gap-x-20 w-10/12 m-auto">
          <section className="flex flex-col mb-10 text-center items-center gap-y-5 col-span-3">
            <h2 className="text-3xl bg-third-color text-white px-2">
              {" "}
              Objectif de la formation{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationPro.objectifsFormation,
              }}
            />
          </section>
          <section className="flex flex-col text-center items-center gap-y-5">
            <h2 className="text-3xl bg-third-color text-white px-2"> Prix </h2>
            <p> {data.datoCmsFormationPro.prix} €/par module</p>
          </section>

          <section className="flex flex-col text-center items-center gap-y-5">
            <h2 className="text-3xl bg-third-color text-white px-2">
              {" "}
              Nombre de participants{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationPro.nombreDeParticipants,
              }}
            />
          </section>

          <section className="flex flex-col text-center items-center gap-y-5">
            <h2 className="text-3xl bg-third-color text-white px-2"> Durée </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationPro.duree,
              }}
            />
          </section>
        </div>
      </article>
      <article className=" w-12/12 s  md:grid gap-x-20 grid-cols-4  ">
        <section className="bg-secondary-color col-span-1 hidden md:block"></section>
        <section className="col-span-3 py-20 flex flex-col gap-y-10">
          <h2 className="text-3xl bg-third-color text-white w-max px-2">
            Description{" "}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationPro.description,
            }}
            className="md:p-10 md:pl-0 "
          />
        </section>
      </article>
      <article className=" w-12/12  py-20 bg-primary-color ">
        <section className="flex flex-col gap-y-10">
          <h2 className="text-3xl bg-third-color  text-white w-max px-2">
            Programme{" "}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationPro.programme,
            }}
            className=" programme w-12/12 m-auto"
          />
        </section>
      </article>
      <article
        id="contact"
        className=" w-12/12  md:grid gap-x-20 grid-cols-3  "
      >
        <section className="col-span-2 py-20 flex flex-col gap-y-10">
          <h2 className="text-3xl bg-fourth-color  text-white w-max px-2">
            Renseignement et contact
          </h2>
          <p>
            {" "}
            Vous souhaitez en savoir plus sur cette formation ou la proposer à
            vos porteurs de projet ?<br />
            N'hésitez pas à nous contacter à l'adresse{" "}
            <a href="mailto:anthony@liono.be" target="_blank" rel="noreferrer">
              anthony@liono.be
            </a>{" "}
            ou remplir le formulaire de contact ci-desous
          </p>
          <div className="flex flex-col md:grid-cols-2 md:grid">
            <GatsbyImage
              image={data.datoCmsHomepage.imageContact.gatsbyImageData}
              alt={data.datoCmsHomepage.imageContact.alt}
            />
            <form
              id="fs-frm"
              name="simple-contact-form"
              accept-charset="utf-8"
              action="https://formspree.io/f/mpzbzwyn"
              method="post"
              className="bg-primary-color p-10"
            >
              <fieldset id="fs-frm-inputs" className="flex flex-col">
                <label htmlFor="full-name" className="">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  className="border mb-2 w-max"
                  required=""
                />
                <label htmlFor="email-address">Adresse mail</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  className="border mb-2 w-max"
                  required=""
                />
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  className="border mb-2"
                  required=""
                ></textarea>
                <input
                  type="hidden"
                  name="_subject"
                  id="email-subject"
                  value="Contact Form Submission"
                />
              </fieldset>
              <input
                type="submit"
                className="mx-auto  lg:mx-0  
      bg-black  font-bold text-white  hover:bg-gray-600
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max"
                value="Envoyer"
              />
            </form>
          </div>
        </section>
        <section className="bg-secondary-color col-span-1 hidden md:block"></section>
      </article>
    </Layout>
  </>
)

export const query = graphql`
  query FormationProQuery($slug: String) {
    datoCmsFormationPro(slug: { eq: $slug }) {
      description
      duree
      introduction
      materiel
      imageFormation {
        alt
        gatsbyImageData
      }
      nombreDeParticipants
      objectifsFormation
      titreFormation
      slug
      programme
      prix
      seo {
      description
      title
    }
    }
    datoCmsHomepage {
      imageContact {
        gatsbyImageData
        alt
      }
    }
  }
`

export default formation
