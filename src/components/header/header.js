import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import 'gatsby-plugin-sass'
//resume
import Resume from '../resume/AngieSpears_Resume.pdf'

//icons
import { FiExternalLink } from 'react-icons/fi'
import { TiThMenu, TiTimes } from 'react-icons/ti'

// header nav function
import UpdateHeader from './headerNavFunc'

import './header.scss'


const Header = ({ siteTitle, home, aboutMe, resume }) => (
  <header>
      <nav>
        <div className = 'mobileNav'>
          <div><Link to='/' id= 'logo'> {siteTitle}</Link></div>
            <div>
              <div><button id = 'menuIcon' tabIndex='0' aria-pressed='false'  onClick = {UpdateHeader}><TiThMenu/></button></div>
              <div><button id = 'menuExitIcon' tabIndex='1'  aria-pressed='false' onClick = {UpdateHeader}><TiTimes/></button></div>
            </div>
          </div>
          <div className= 'linksContainer'>
              <div><Link to= '/' className= 'links' id= "home">{home}</Link></div>
              <div><Link to= '/about-me' className= 'links'  id= "about">{aboutMe}</Link></div>   
              <div><a href= {Resume} target= 'blank' className= 'links' id= 'resume' aria-label='Resume'> {resume} <FiExternalLink id = "externalIcon" /> </a></div>
          </div>
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

