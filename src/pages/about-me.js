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
        fluid(maxWidth: 600) {
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
            <h1>Hey there,</h1>
          </div>
          <div className = "imgContainer">
            <Img fluid={data.BioImg.childImageSharp.fluid} fadeIn={false} alt= 'Bio Img'/>
          </div>
          <div className = "detailsContainer">
            <h1>Hey there,</h1>
            <p>Thanks for stopping by !</p>
            <p> My name is Angie Spears. I'm a Front End Software Engineer currently based in NYC.  I enjoy all things tech, chocolate, and coffee.  Bringing quality designs to life is what I'm here to do. I believe in strategizing, planning and executing, ( Yup! ) all in that order.  I'm a General Assembly grad with an undergrad in Business.  If I'm not building things, you will find me traveling or discovering new restaurants in the city.</p>
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
