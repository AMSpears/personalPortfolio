import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"
import '../components/projectPages.scss'


const FRSVerizon = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/frsVerizon/verizon-1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        VerizonImg2: file(relativePath: {eq: "projects/frsVerizon/verizon-2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        VerizonImg3: file(relativePath: {eq: "projects/frsVerizon/verizon-3.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
    <Layout>
        <SEO title='FRS Verizon'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>While at R/GA, I worked on parts of this awesome project called <strong>First Responders</strong> for Verizon. This campaign allowed people to share their gratitude to First Responders during the super bowl. This project was developed in collaboration with other engineers, designers,  QA engineers, and other disciples. </p>
        </section>
        <section className='projectImg'>
            <Img fluid={data.VerizonImg2.childImageSharp.fluid} fadeIn={false} alt='header' />
        </section>
        <section className = 'about'> 
            <p>Some technologies used to create this site were React.js, HTML5, and SASS.</p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.VerizonImg3.childImageSharp.fluid} fadeIn={false} alt='header' />
        </section>
        <section className = 'projectsLinksContainer'> 
            <div className= "links"> <a href= "https://allourthanks.com/" target= "blank">Website</a></div> 
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default FRSVerizon