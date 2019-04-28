import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  GoPrimitiveDot
} from "react-icons/go";

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
            <h1>Hey there,</h1>
          </div>
          <div>
            <Img fluid={data.BioImg.childImageSharp.fluid} fadeIn={false} alt= 'Bio Img'/>
          </div>
          <div>
            <h1>Hey there,</h1>
            <p>Thanks for stopping by !</p>
            <p> My name is Angie Spears. I'm a Front End Software Engineer currently based in NYC.  I enjoy all things tech, chocolate, and coffee.  Bringing quality designs to life is what I'm here to do. I believe in strategizing, planning and executing, ( Yup! ) all in that order.  I'm a General Assembly grad with an undergrad in Business.  If I'm not building things, you will find me traveling or discovering new restaurants in the city.</p>
            <h2>Technologies</h2>
            <p>
              JavaScript<GoPrimitiveDot className = "dot"/> 
              ReactJs<GoPrimitiveDot className = "dot"/> 
              PreactJs<GoPrimitiveDot className = "dot"/>  
              GatsbyJs<GoPrimitiveDot className = "dot"/> 
              NodeJs<GoPrimitiveDot className = "dot"/> 
              MongoDB<GoPrimitiveDot className = "dot"/> 
              PSQL / SQL<GoPrimitiveDot className = "dot"/>  
              ExpressJs<GoPrimitiveDot className = "dot"/>  
              PugJs<GoPrimitiveDot className = "dot"/>  
              HTML5<GoPrimitiveDot className = "dot"/> 
              CSS3<GoPrimitiveDot className = "dot"/> 
              SASS<GoPrimitiveDot className = "dot"/> 
              jQuery<GoPrimitiveDot className = "dot"/>  
              JSON<GoPrimitiveDot className = "dot"/>  
              Contentful<GoPrimitiveDot className = "dot"/>  
              Media Queries<GoPrimitiveDot className = "dot"/>  
              Git<GoPrimitiveDot className = "dot"/> 
              GitHub<GoPrimitiveDot className = "dot"/> 
              RESTful APIs<GoPrimitiveDot className = "dot"/> 
              Ruby<GoPrimitiveDot className = "dot"/>  
              Rails 
            </p>
          </div>
        </div>
      </section>
    </Layout> 
  )}/>
)

export default AboutPage
