import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
//header 
import headerImage from '../images/home_header.png'
// brands
import Samsung from '../images/logos/samsung.png'
import Verizon from '../images/logos/verizon.png'
//technologies
import Technologies from '../components/technologies/technologies'
//projects
import Projects from "../components/projects/projects"

import '../components/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title='Angie Spears' keywords={[`gatsby`, `application`, `react`, `front-end software Engineer`, `software Engineer`, `nyc`]} />
    <section className = 'imgPlaceholder'>
      <img id= 'headerImg' src= {headerImage} alt= 'header'/>
    </section>
    <section className = 'intro'> 
        <h1>About Me</h1>
        <hr/>
        <p>Hi, I'm <strong>Angie Spears</strong>, a <strong>Front End Software Engineer</strong>. I am an ambitious, self-motivated and solutions-driven individual. I recognize needs, perfect the details and use strategic thinking to achieve goals</p>
    </section>
    <section className= 'brands'> 
        <h1>Brands I've worked with</h1>
        <hr/>
        <div className = 'brandLogos'>
          <div><img id = 'samsung' src= {Samsung} alt= 'samsung'/></div>
          <div><img id = 'verizon' src= {Verizon} alt= 'verizon'/></div>
        </div>
    </section>
    <Technologies/>
    <section className = "projects">
      <h1>Projects</h1>
      <hr/>
      <Projects/>
    </section>
  </Layout>
)


export default IndexPage
