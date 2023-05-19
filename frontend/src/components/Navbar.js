import React from 'react'
import '../css/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <div className = 'logo'>
            PurpleMelon
        </div>
        <ul className='menu'>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar