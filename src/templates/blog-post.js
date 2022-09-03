import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => (
  <>
    <Layout>
      <Seo
        title={`Blog liono - ${data.datoCmsArticle.seo.title}`}
        image={data.datoCmsArticle.seo.image.gatsbyImageData}
        description={data.datoCmsArticle.seo.description}
      />
      <main className="w-12/12 bg-secondary-color ">
      <div class="w-10/12 m-auto pt-5 bg-white px-2 articles md:px-10 pb-20  flex flex-col">
        <figure className="mb-5">
          <GatsbyImage
            image={data.datoCmsArticle.imageCover.gatsbyImageData}
            alt={data.datoCmsArticle.imageCover.alt}
          />
        </figure>
        <article className="mb-10">
          <h2 className="text-4xl text-liono-blue mb-5">
            {data.datoCmsArticle.titre}{" "}
          </h2>
          <div class="flex items-center gap-x-2 mt-2 ">
            <GatsbyImage
              image={data.datoCmsArticle.auteur.image.gatsbyImageData}
              alt={data.datoCmsArticle.auteur.image.alt}
            />
            <section className="flex flex-col">
              <div class="italic">
                Article rédigé le {data.datoCmsArticle.meta.firstPublishedAt}{" "}
                par {data.datoCmsArticle.auteur.nom}
              </div>
              <div
                className={`bg-${data.datoCmsArticle.categorie.tailwind} text-white w-max p-1`}>
                <p className="text-xs">{data.datoCmsArticle.categorie.nom}</p>
              </div>
            </section>
          </div>
        </article>
        <article>
          <section
            className="blog flex flex-col gap-y-10"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsArticle.contenuHtml,
            }}
          />
        </article>
        </div>
      </main>
    </Layout>
  </>
)

export const query = graphql`
  query BlogPostQuery($slug: String) {
    datoCmsArticle(slug: { eq: $slug }) {
      slug
      id
      contenuHtml
      auteur {
        nom
        image {
          alt
          gatsbyImageData(width: 60)
        }
      }
      categorie {
        tailwind
        couleur {
          hex
        }
        nom
        slug
      }
      imageCover {
        alt
        gatsbyImageData(aspectRatio: 2.3)
      }
      titre
      seo {
        description
        title
        twitterCard
        image {
          gatsbyImageData
        }
      }
      seoMetaTags {
        tags
      }
      meta {
        firstPublishedAt(formatString: "DD/MM/YYYY")
      }
    }
  }
`

export default BlogPost
