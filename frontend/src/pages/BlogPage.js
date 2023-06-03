import {useParams} from "react-router-dom"


import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';

const BlogPage=()=>{
  const [post, getPost] =useState({});
  const {id} = useParams();

  const getSingleBlog = async() =>{
    const {data} = await axios.get(`http://127.0.0.1:8000/${id}`)
    getPost(data)
    console.log({id})
  }

  useEffect(()=>{
    getSingleBlog();
  },[])


  return (
    <div>
     <Navbar></Navbar>
     <div> 
      <h2>{post.title}</h2>
     </div>
     
     <div>
      <h4>{post.created_at}</h4>
     </div>

     <div>
     <img className="detail-image" src={`http://127.0.0.1:8000${post.image}`} alt=""/>
     </div>
     <div>
      <p>{post.content}</p>
     </div>
    </div>
  );

}



  
export default BlogPage