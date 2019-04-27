import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"

import '../components/projectsPages/provideServices.scss'


const ProvideServices = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/provideServices/provideHeader.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ProjectImgOne: file(relativePath: {eq: "projects/provideServices/provideOne.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ProjectImgTwo: file(relativePath: {eq: "projects/provideServices/provideTwo.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
     <Layout>
        <SEO title='Provide Services' />
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.ProjectImgOne.childImageSharp.fluid} fadeIn={false} alt= 'Provide Services Overview'/>
        </section>
        <section className = 'about'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </section>
         <section className = 'projectImg'>
            <Img fluid={data.ProjectImgTwo.childImageSharp.fluid} fadeIn={false} alt= 'Provide Services Overview'/>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default ProvideServices
