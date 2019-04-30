import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"

import '../components/projectPages.scss'


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
            <p>This project for<strong> Provide Services </strong> was developed in collaboration with a UX/UI designer. The intent of this site is for this Cryptocurrency startup to communicate their services, allow customers to connect with them and utilize their services. </p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.ProjectImgOne.childImageSharp.fluid} fadeIn={false} alt= 'Provide Services Overview'/>
        </section>
        <section className = 'about'> 
            <p>Some technologies used to develop this website are (client side) ReactJs, HTML5, CSS3, and (server side) NodeJs. The backend portion of the site enables the contact form to allow the company to received direct emails from customers.</p>
        </section>
         <section className = 'projectImg'>
            <Img fluid={data.ProjectImgTwo.childImageSharp.fluid} fadeIn={false} alt= 'Provide Services Overview'/>
        </section>
        <section className = 'linksContainer'> 
            <div className= "links"> <a href= "https://provide.services/" target= "blank">Website</a></div> 
            <div className= "links"><a href= "https://github.com/AMSpears/provide-services" target= "blank">Github</a></div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default ProvideServices
