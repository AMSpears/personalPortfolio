import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"


const TriviaGame = () => (
    <Layout>
        <SEO title='Provide Services'/>
         <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)

export default TriviaGame