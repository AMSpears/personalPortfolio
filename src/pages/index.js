import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Angie Spears" keywords={[`gatsby`, `application`, `react`, `front-end software Engineer`, `software Engineer`, `nyc`]} />
    <a id="home">
      <section className = "imgPlaceholder"></section>
    </a>
    <a id="aboutMe">
      <section className = 'intro'> 
        <h1>About Me</h1>
        <hr/>
        <p>Hi, I'm <strong>Angie Spears</strong>, a <strong>Front End Software Engineer</strong>. I am an ambitious, self-motivated and solutions-driven individual. I recognize needs, perfect the details and use strategic thinking to achieve goals</p>
      </section>
    </a>
  </Layout>
)


export default IndexPage
