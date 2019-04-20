import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className = "messageContainer">
      <h1>404 | PAGE NOT FOUND</h1>
      <p>Looks like you type the wrong address. You can use the navegation above to go to the correct page.</p>
    </div>
  </Layout>
)

export default NotFoundPage
