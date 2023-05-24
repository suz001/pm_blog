import React from 'react'
import Navbar from '../components/Navbar';
import '../css/Contact.css';
function Contact() {
  return (
    <div class='container'>
      <Navbar/>
      <form id='contact'>
        
        <h1>Contact <span>Here</span></h1>
        <label for="name">Contact Name</label>
        <input type="text" name="name" id="" required/>
        <label for="email">Contact Email</label>
        <input type="text" name="email" id="" required/>
        <label for="phone">Phone</label>
        <input type="text" name="phone" id=""required/>
        <label for="message">Subject</label>
        <textarea name="text" id="message" cols="30" rows="10" required/> 
        <input type="submit" value='Submit'/>
      </form>      
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  )
}

export default Contact