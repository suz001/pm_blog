import React from 'react'
import '../css/Footer.css';
function Footer() {
  return (
    <div className='footer-main'>

        <h2>Email Us</h2>
        <h4>email here</h4>
        <h5>PURPLEMELON</h5>
<hr/>
        <div className='row'>
            <p className='col-sm'>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved

            </p>
        </div>
        </div>
  )
}

export default Footer