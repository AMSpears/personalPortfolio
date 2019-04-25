import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
//header
import HeaderImg from '../images/web-full-width.png'

import Projects from "../components/projects/projects"


const FRSVerizon = () => (
    <Layout>
        <SEO title='FRS Verizon'/>
        <section className = 'imgPlaceholder'>
            <img id= 'headerImg' src= {HeaderImg} alt= 'header'/>
        </section>
         <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)

export default FRSVerizon