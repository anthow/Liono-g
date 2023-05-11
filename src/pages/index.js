import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/homepage/header"
import Icon from "../components/homepage/icon"
import Realisation from "../components/homepage/realisation"
import Contact from "../components/homepage/contact"
import Event from "../components/homepage/event"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Liono l'agence numérique responsable à Liège"
      description="Liono l'agence numérique qui vous accompagne dans le développement de vos solutions numériques écoresponsables à Liège"
    />
    <Header/>
    <Icon/>
<Event />
<Realisation />
<Contact />
  </Layout>
)

export default IndexPage
