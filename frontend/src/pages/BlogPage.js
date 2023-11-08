import {useParams} from "react-router-dom"


import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import parse from 'html-react-parser'
import '../css/BlogDetail.css';

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
     <div  className="blog-whole">
     <div> 
      <h2 className="each-blog-title">{post.title}</h2>
     </div>
     
   

     <div>
     <img className="detail-image" src={`http://127.0.0.1:8000${post.image}`} alt=""/>
     </div>

     <div className="publish-date">
      <a>{post.created_at}</a>
     </div>

     <article> 
     <div>
     <div className="blog-content" dangerouslySetInnerHTML={{__html: `${post.content}`}}>
 
     </div>
     <div>
      
     </div>

    

     </div>

  
     
    </article>
    </div>
    </div>
  );

}



  
export default BlogPage