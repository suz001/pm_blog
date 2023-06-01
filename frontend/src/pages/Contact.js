import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import '../css/Contact.css';
const baseUrl = 'http://127.0.0.1:8000/contact/';

const Contact = () =>{

  const [ContactData, setContactData]=useState({
    name:"",
    email:"",
    phone:"",
    message:"",
    status:""});

  const handleChange = (event) =>{
    setContactData({...ContactData,[event.target.name]:event.target.value});


  }
  const SubmitForm = () =>{
    const ContactFormData = new FormData();
    ContactFormData.append('name',ContactData.name)
    ContactFormData.append('email',ContactData.email)
    ContactFormData.append('phone',ContactData.phone)
    ContactFormData.append('message',ContactData.message)
    
    try{
      axios.post(baseUrl,ContactFormData).then((response)=>{
        setContactData({
          name:'',
          email:'',
          phone:'',
          message:'',
          status:'success'
        })
      })
    }catch(error){
        console.log(error);
        setContactData({'status':'error'})
      }
    }
  
/*

  const handleSubmit = async() =>{
    let formField = new FormData();
    formField.append('name',data.name);
    formField.append('email',data.email);
    formField.append('phone',data.phone);
    formField.append('message',data.message);

    await axios({
      method:'post',
      url: 'http://localhost:8000/contact/',
      data: formField,
    }).then((response)=>{

    })

  }
  <input type="submit" value='Submit'/>
  */

  return (
  
    <div>
      <Navbar/>
    <div className='container'>
      <form id='contact' >
        <label/>
        <h1>Contact <span>Here</span></h1>
        <label/>
        <input type="text" name="name" id="" onChange={handleChange} value={ContactData.name} placeholder="Enter Name" required/>
        <input type="text" name="email" id="" onChange={handleChange} value={ContactData.email} placeholder="Enter Email" required/>
        <input type="text" name="phone" id="" onChange={handleChange} value={ContactData.phone} placeholder="Enter Phone" required/>
        <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={ContactData.message} required> Enter text here... </textarea>
        <button onClick={SubmitForm} type="sumbit">Send</button>
      </form>      
    </div>    
    </div>   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  )
}

export default Contact
