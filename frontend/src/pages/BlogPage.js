import {useParams} from "react-router-dom"


import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function BlogPage() {
  const [post, getPost] =useState(null);
  const {blogslug} = useParams();
console.log(blogslug);

const fetchDetail = ()=>{
  fetch
}
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}