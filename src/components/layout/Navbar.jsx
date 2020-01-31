import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper indigo darken-4'>
        <a href='https://bilelmoussaoui.github.io/metainfo-generator/' className='brand-logo'>
          Metainfo Generator
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://www.freedesktop.org/software/appstream/docs/'>Specifications</a>
          </li>
          <li>
            <a href='https://github.com/bilelmoussaoui/metainfo-generator'>Source Code</a>
          </li>
          <li>
            <a href='collapsible.html'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
