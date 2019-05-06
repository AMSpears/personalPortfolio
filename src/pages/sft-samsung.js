import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"
import '../components/projectPages.scss'


const SFTSamsung = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/sftSamsung/samsung-1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        SamsungImg1: file(relativePath: {eq: "projects/sftSamsung/samsung-2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality:100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
    <Layout>
        <SEO title='SFT Samsung'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>While at R/GA,  I worked on the Samsung: <strong>Solve For Tomorrow </strong>campaign. For each new phase of this campaign, I made updates in collaboration with other engineers, designers,  QA engineers, and other disciples. </p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.SamsungImg1.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>Some technologies used to update this site were Javascript, HTML5, and SASS. </p>
        </section>
         <section className = 'projectsLinksContainer'> 
            <div className= "links"> <a href= "https://www.samsung.com/us/solvefortomorrow/" target= "blank">Website</a></div> 
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default SFTSamsung