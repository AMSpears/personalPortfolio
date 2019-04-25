import React from 'react'
import 'gatsby-plugin-sass'

// Techologies logos 
import JavaScript from '../../images/logos/javascript.png'
import MongoDB from '../../images/logos/mongodb.png'
import Api from '../../images/logos/apiLogo.png'
import HtmlCss from '../../images/logos/logo_html-css.png'
import Reactjs from '../../images/logos/logo_react.png'
import Express from '../../images/logos/express-js.png'
import Ruby from '../../images/logos/logo_ruby.png'
import Sass from '../../images/logos/logo_sass.png'
import Node from '../../images/logos/node-logo.png'

import './technologies.scss'


const Technologies = () => (
   <section className= 'technologies'> 
        <h1>Technologies</h1>
        <hr/>
        <div className = 'techList'>
            <div><img id='js' src={JavaScript} alt='Javascript' /></div>
            <div><img id = 'api' src= {Api} alt= 'RestFulAPIs'/></div>
            <div><img id = 'reactjs' src= {Reactjs} alt= 'ReactJS'/></div> 
            <div><img id = 'node' src= {Node} alt= 'NodeJS'/></div>
            <div><img id = 'express' src= {Express} alt= 'ExpressJS'/></div> 
            <div><img id= 'mongodb' src={MongoDB} alt= 'MongoDB' /></div>
            <div><img id = 'htmlCss' src= {HtmlCss} alt= 'HTML5 | CSS3'/></div>
            <div><img id = 'sass' src= {Sass} alt= 'Sass'/></div>
            <div><img id = 'ruby' src= {Ruby} alt= 'Ruby'/></div>
        </div>
    </section>
)


export default Technologies