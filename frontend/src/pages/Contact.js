import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import '../css/Contact.css';

const Contact = () =>{

  const [data, setData]=useState({name:"",email:"",phone:"",message:""});

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]:value})

  }
  const handleSubmit = async() =>{
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
  */

  return (
  
    <div>
      <Navbar/>
    <div class='container'>
      <form id='contact' onSubmit={handleSubmit}>
        <label/>
        <h1>Contact <span>Here</span></h1>
        <label/>
        <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Name" required/>
        <input type="text" name="email" id="" onChange={handleChange} value={data.email} placeholder="Enter Email" required/>
        <input type="text" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="Enter Phone" required/>
        <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={data.message} required> Enter text here... </textarea>
        <input type="submit" value='Submit'/>
      </form>      
    </div>    
    </div>   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  )
}

export default Contact
