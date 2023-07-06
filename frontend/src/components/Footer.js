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
        <h4>Email Us</h4>
        <br/>
        <h4>purplemelon000@gmail.com</h4>
        
        </div>

        </footer>
        
  )
}

export default Footer


