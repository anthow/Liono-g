import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page non trouvée" />
    <h1>Erreur 404</h1>
    <p>désolé cette page n'existe pas</p>
  </Layout>
)

export default NotFoundPage
