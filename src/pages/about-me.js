import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../components/about.scss'

const AboutPage = () => (
  <StaticQuery query = { graphql `{
    BioImg: file(relativePath: {eq: "bioPic.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`} render={(data) => (
    <Layout>
      <SEO title='About Me'/>
      <section className = 'bio'>
        <div className = 'outerContainer'>
          <div className= 'mobileHeader'>
            <h1>Nice to meet you!</h1>
          </div>
          <div className = "imgContainer">
            <Img fluid={data.BioImg.childImageSharp.fluid} fadeIn={false} alt= 'Bio Img'/>
          </div>
          <div className = "detailsContainer">
            <h1>Nice to meet you!</h1>
            <p> I’m a NYC based Front End Engineer and General Assembly Graduate. Bringing quality designs to life is what I’m here to do. My goal is to elevate the performance of software applications I build and the cross-disciplinary teams I work with. I thrive by strategizing, planning and executing. When I’m not building websites and apps, I’m scouting out the best restaurants in New York City.</p>
            <h2>Technologies</h2>
            <p> 
              JavaScript <span>&#8226;</span> ReactJs <span>&#8226;</span> PreactJs <span>&#8226;</span> GatsbyJs <span>&#8226;</span> NodeJs <span>&#8226;</span> MongoDB <span>&#8226;</span> PSQL / SQL <span>&#8226;</span> ExpressJs <span>&#8226;</span> PugJs <span>&#8226;</span> HTML5 <span>&#8226;</span> CSS3 <span>&#8226;</span> SASS <span>&#8226;</span> jQuery <span>&#8226;</span> JSON <span>&#8226;</span> Contentful <span>&#8226;</span> Media Queries <span>&#8226;</span> Git <span>&#8226;</span> GitHub <span>&#8226;</span> RESTful APIs <span>&#8226;</span> Ruby <span>&#8226;</span> Rails 
            </p>
          </div>
        </div>
      </section>
    </Layout> 
  )}/>
)

export default AboutPage
