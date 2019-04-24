import React from "react"

import "gatsby-plugin-sass"

//icons
import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa';

import "./footer.scss"


const Footer = () => (
    <footer>
        <div className ="footerDetails">
          <div className = "social">
            <h1>Social</h1>
            <div className ="icons">
              <div><a href= "https://github.com/amspears" target = "blank"><FaGithub/></a></div>
              <div><a href= "https://codepen.io/AMSpears/" target = "blank"><FaCodepen/></a></div>
              <div><a href= "https://www.linkedin.com/in/angiespears/" target = "blank"><FaLinkedinIn/></a></div>
            </div>
          </div>

          <div className = "contact">
            <h1>Contact</h1>
            <p>hello@angiespears.com</p>
            <p>571-659-8072</p>
          </div>

          <div className = "location">
              <h1>Proudly based in NYC.</h1>
          </div>
        </div>
    </footer>
)

export default Footer