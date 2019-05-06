import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"

import '../components/projectPages.scss'

const AboveAllSecurity = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/aboveAllSecurity/above-all-security1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        AboveAllSecurityImg: file(relativePath: {eq: "projects/aboveAllSecurity/above-all-security2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
    <Layout>
        <SEO title='Above All Security'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p><strong>Above All Security</strong> is a small security firm based in Washington, DC.  I designed and developed this site for the client to communicate their services and allow their current and new clients to be able to connect with them.</p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.AboveAllSecurityImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section> 
        <section className = 'about'> 
            <p>Some technologies used to develop this website are (client side) ReactJs, HTML5, CSS3, and (server side) NodeJs.  The backend portion of the site enables the contact form to allow the company to received direct emails from customers.</p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'projectsLinksContainer'> 
            <div className= "links"> <a href= "https://www.aboveall-security.com/" target= "blank">Website</a></div> 
            <div className= "links"><a href= "https://github.com/AMSpears/above-all-security" target= "blank">Github</a></div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>

        </Layout>
    )}/>
)

export default AboveAllSecurity