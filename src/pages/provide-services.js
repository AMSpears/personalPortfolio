import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
//header 
import HeaderImg from '../images/projects/provideServices/provideHeader.png'

// project overview
import ProjectImgOne from '../images/projects/provideServices/provideOne.png'
import ProjectImgTwo from '../images/projects/provideServices/provideTwo.png'

import Projects from "../components/projects/projects"

import '../components/projectsPages/provideServices.scss'


const ProvdeServices = () => (
    <Layout>
        <SEO title='Provide Services' />
        <section className = 'imgPlaceholder'>
            <img id= 'headerImg' src= {HeaderImg} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </section>
        <section className = 'projectImg'>
            <img src= {ProjectImgOne} alt= 'Provide Services Overview'/>
        </section>
        <section className = 'about'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </section>
         <section className = 'projectImg'>
            <img src= {ProjectImgTwo} alt= 'Provide Services Overview'/>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)


export default ProvdeServices
