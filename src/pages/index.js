import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
//technologies
import Technologies from '../components/technologies/technologies'
//projects
import Projects from "../components/projects/projects"

import '../components/index.scss'

const IndexPage = () => (
    <StaticQuery query = { graphql `{
      HeaderImg: file(relativePath: {eq: "home_header.png"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      Samsung: file(relativePath: {eq: "logos/samsung.png"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      Verizon: file(relativePath: { eq: "logos/verizon.png"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
  <Layout>
      <SEO title='Angie Spears' keywords={[`gatsby`, `application`, `react`, `front-end software Engineer`, `software Engineer`, `nyc`]} />
      <section className = 'imgPlaceholder'>
        <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt='header' />
      </section>
      <section className = 'intro'> 
          <h1>About Me</h1>
          <hr/>
          <p>Hi, I'm <strong>Angie Spears</strong>, a <strong>Front End Software Engineer</strong>. I am an ambitious, self-motivated and solutions-driven individual. I recognize needs, perfect the details and use strategic thinking to achieve goals.</p>
      </section>
      <section className= 'brands'> 
          <h1>Brands I've worked with</h1>
          <hr/>
          <div className = 'brandLogosContainer'>
            <div className = "brandLogoItem"><Img fluid={data.Samsung.childImageSharp.fluid} fadeIn={false} alt= 'Samsung' /></div>
            <div className = "brandLogoItem"><Img fluid={data.Verizon.childImageSharp.fluid} fadeIn={false} alt= 'Verizon'/></div>
          </div>
      </section>
      <Technologies/>
      <section className = "projects">
        <h1>Projects</h1>
        <hr/>
        <Projects/>
      </section>
    </Layout>
)}/>)


export default IndexPage
