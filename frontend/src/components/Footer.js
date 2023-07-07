import React from 'react'
import '../css/Footer.css';
function Footer() {
  return (
    
    <footer className='footer-main'>
      <div className="footer-left">
      <img src="favicon.ico" alt="Icon" className='iconfooter'></img>
      <p className='CompanyName'>PurpleMelon</p>
     <hr/>
     
     <p className='copyright'>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved
            </p>
      </div>
      <div className="footer-right">
      
        <ul className='footer-ul'>
            <li><a className='footer-a' href="/">Home</a></li>
            <li><a className='footer-a' href="/blog">Blog</a></li>
            <li><a className='footer-a' href="/contact">Contact</a></li>
          
        </ul>

        </div>

        </footer>
        
  )
}

export default Footer


