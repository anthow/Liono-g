import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
const Blog = ({ data }) => (
  <Layout>
    <Seo title="blog - Liono l'agence numérique responsable à Liège" />

    <main class="w-10/12 m-auto py-20">
      <article class="flex flex-col md:grid grid-cols-2 gap-x-10">
        {data.allDatoCmsArticle.edges.map(({ node }, i) =>
          i % 2 ? (
            <>
              {" "}
              <div>
                <h2 className="text-4xl text-liono-blue ">{node.titre} </h2>
                <div class="flex items-center gap-x-2 mt-2 mb-20">
                  <GatsbyImage
                    image={node.auteur.image.gatsbyImageData}
                    alt={node.auteur.image.alt}
                  />
                  <div class="italic">
                    Article rédigé le {node.meta.firstPublishedAt} par{" "}
                    {node.auteur.nom}
                  </div>
                  <div
                className={`bg-${node.categorie.tailwind} text-white w-max p-1`}>
                <p className="text-xs">{node.categorie.nom}</p>
              </div>
                </div>
                <p class="mb-5">{node.chapeau}</p>
                <Link
                  className="mx-auto lg:mx-0 w-max  bg-liono-green  font-bold text-white rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  to={node.slug}
                >
                  {" "}
                  lire la suite...
                </Link>
              </div>
              <figure className="md:mb-20">
                <GatsbyImage
                  image={node.imageCover.gatsbyImageData}
                  alt={node.imageCover.alt}
                />
              </figure>
            </>
          ) : (
            <>
              <figure className="md:mb-20">
                <GatsbyImage
                  image={node.imageCover.gatsbyImageData}
                  alt={node.imageCover.alt}
                />
              </figure>
              <div>
                <h2 className="text-4xl text-liono-blue ">{node.titre} </h2>
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
                <Link
                  className="mx-auto lg:mx-0 w-max  bg-liono-green  font-bold text-white rounded-full  py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  to={node.slug}
                >
                  {" "}
                  lire la suite...
                </Link>
              </div>
            </>
          )
        )}
      </article>
    </main>
  </Layout>
)
export const query = graphql`
  {
    allDatoCmsArticle(sort: { fields: meta___publishedAt, order: DESC }) {
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
          contenu {
            blocks
            links
            value
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
