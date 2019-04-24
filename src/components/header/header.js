import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "gatsby-plugin-sass"
import Resume from "../resume/AngieSpears_Resume.pdf"

import { FaStream } from 'react-icons/fa';

import "./header.scss"

// function to access links in mobile version
const UpdateHeader = () => {
  let menuItems = document.querySelectorAll('.linksContainer')
  
  if (window.innerWidth <= 600) {
    for (let i = 0; i < menuItems.length; i++) {
       menuItems[i].classList.toggle("active")
    }    
  }
}
    
const Header = ({ siteTitle, home, aboutMe, resume }) => (
  <header>
      <nav>
        <ul>
          <div className ="mobileNav">
            <li><Link to='/' id= 'logo'> {siteTitle}</Link></li>
            <li><button id = "menuIcon" onClick = {UpdateHeader}><FaStream/></button></li>
          </div>
          <div className= 'linksContainer'>
            <li><Link to= '/' className= 'links'>{home}</Link></li>
            <li><Link to= '/about-me' className= 'links'>{aboutMe}</Link></li>
            <li><a href= {Resume} target= "blank"  className= 'links' id= 'resume'>{resume}</a></li>
          </div>
        </ul>
      </nav>
  </header>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
  home: PropTypes.string,
  aboutMe: PropTypes.string,
  resume: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  home: `Home`,
  aboutMe: `About Me`,
  resume: `Resume`
}

export default Header

