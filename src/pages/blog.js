import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
const Blog = ({ data }) => (
  <Layout>
    <Seo title="Tout les articles - Liono l'agence numérique responsable à Liège"
    description="partie blog du site Liono l'agence numérique responsable à Liège" />

    <main class="w-12/12 bg-secondary-color m-auto pb-20">
      <article class="flex flex-col w-11/12 md:w-10/12 m-auto pb-10 bg-white p-1 md:p-10 md:grid grid-cols-2 gap-y-10 md:gap-y-20 gap-x-10">
        {data.allDatoCmsArticle.edges.map(({ node }, i) =>
            <>
            
              <figure className="md:mb-20">
                <GatsbyImage
                  image={node.imageCover.gatsbyImageData}
                  alt={node.imageCover.alt}
                />
              </figure>
              <div>
              <h2 className="text-2xl bg-third-color break-words text-white w-full p-2 ">{node.titre} </h2>
                <div class="flex items-center gap-x-2 mt-2 mb-10">
                  <GatsbyImage
                    image={node.auteur.image.gatsbyImageData}
                    alt={node.auteur.image.alt}
                  />
                  <div class="italic">
                    Article rédigé le {node.meta.firstPublishedAt} par{" "}
                    {node.auteur.nom}
                  </div>
                </div>
                <p class="mb-5">{node.chapeau}</p>
                <Link rel="noreferrer"
                  className="mx-auto  lg:mx-0  
                  bg-black  font-bold text-white 
                  text-lg
                  my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
                  transition hover:scale-105 duration-300 ease-in-out"
                  to={node.slug}
                >
                  {" "}
                  lire la suite...
                </Link>
              </div>
            </>
          ) 
        }
      </article>
    </main>
  </Layout>
)
export const query = graphql`
  {
    allDatoCmsArticle(sort: {fields: meta___createdAt, order: DESC}) {
      edges {
        node {
          chapeau
          id
          slug
          titre
          categorie {
            slug
            nom
            tailwind
          }
          auteur {
            nom
            image {
              alt
              gatsbyImageData(width: 40)
            }
          }
          imageCover {
            alt
            gatsbyImageData
          }
          seo {
            description
            title
            twitterCard
            image {
              gatsbyImageData
            }
          }
          meta {
            firstPublishedAt(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`

export default Blog
