import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../components/about.scss'

const AboutPage = () => (
  <StaticQuery query = { graphql `{
    HeaderImg: file(relativePath: {eq: "web-full-width.png"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BioImg: file(relativePath: {eq: "web-half-width.png"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`} render={(data) => (
    <Layout>
      <SEO title='About Me'/>
      <section className = 'imgPlaceholder'>
        <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
      </section>
      <section className = 'bio'>
        <div className = 'outerContainer'>
          <div className= 'mobileHeader'>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
          </div>
          <div>
            <Img fluid={data.BioImg.childImageSharp.fluid} fadeIn={false} alt= 'Bio Img'/>
          </div>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <h2>Technologies</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
        </div>
      </section>
    </Layout> 
  )}/>
)

export default AboutPage
