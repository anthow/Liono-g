/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import Footer from "./footer"
import CookieConsent from 'react-cookie-consent'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <body className="p-3">
      <Header className=""  siteTitle={data.site.siteMetadata?.title || `Title`} />
    
        <main className="">{children}</main>

<Footer />  
<CookieConsent
      location="bottom"
      buttonText="J'accepte"
      declineButtonText="Je refuse"
      cookieName="myCookieName"
      expires={150}
    >
      Ce site utilise des cookies pour améliorer votre expérience utilisateur.
    </CookieConsent>
<script async defer src="https://scripts.withcabin.com/hello.js"></script>   
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
