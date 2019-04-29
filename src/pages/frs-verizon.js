import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </section>
        <section className='projectImg'>
            <Img fluid={data.VerizonImg2.childImageSharp.fluid} fadeIn={false} alt='header' />
        </section>
        <section className = 'about'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.VerizonImg3.childImageSharp.fluid} fadeIn={false} alt='header' />
        </section>
        <section className = 'about'> 
            <div className = 'linksContainer'>
                <div className= "links"> <a href= "https://allourthanks.com/" target= "blank">Website</a></div> 
            </div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default FRSVerizon